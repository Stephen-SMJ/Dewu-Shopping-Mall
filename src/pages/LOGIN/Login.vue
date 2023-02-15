<template>
  <div>
    <login-header></login-header>
    <login-input @getLoginData="getLoginData"></login-input>
    <login-icon></login-icon>
  </div>
</template>

<script>
import LoginHeader from "./components/loginheader";
import LoginIcon from "./components/loginicon";
import LoginInput from "./components/logininput"
import axios from "axios";

export default {
  name: "Login",
  components: {
    LoginHeader,
    LoginIcon,
    LoginInput
  },
  methods: {
    getLoginData(data) {
      let token = this.$store.getters.getToken
      axios.post('/api/user/login',
          {username: data[0], password: data[1]}, {headers: {'token': token}}
      ).then(res => {
        if (res.data.status === 0) {
          console.log(res.data.msg);
        } else {
          console.log(res.data.msg + res.data.token);
          this.$store.commit('setToken', res.data.token)
          this.$store.commit('setUserInfo', [res.data.user_info.username, res.data.user_info.user_signature])
          localStorage.token = res.data.token
          this.$router.push("/my")
        }
      }).catch(err => {
        console.log("Catch:" + err)
      })
    }
  },
  created() {
    let token = this.$store.getters.getToken
    axios.post('/api/user/ValidateCheck', {'ValidateCheck': 'ValidateCheck'}, {headers: {'token': token}}
    ).then(res => {
      if (res.data.status === 0) {
        console.log(res.data.msg);
      } else {
        this.$router.push("/my")
      }
    }).catch(err => {
      console.log("Catch:" + err)
    })
  }
}
</script>

<style scoped>

</style>
