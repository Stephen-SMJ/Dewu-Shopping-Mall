<template>
  <div>
    <user-info @Logout="Logout"></user-info>
    <purchase-info></purchase-info>
    <sort-info></sort-info>
  </div>
</template>

<script>
import UserInfo from "./components/userInfo";
import PurchaseInfo from "./components/purchaseInfo";
import SortInfo from "./components/sortInfo";
import axios from "axios";

export default {
  name: "My",
  components: {SortInfo, PurchaseInfo, UserInfo},
  data() {
    return {}
  },
  methods: {
    Logout() {
      localStorage.clear();
      this.$store.commit('setUserInfo', ['点击登录', '未设置']);
      this.$store.commit('setToken', '')
    }
  },
  created() {
    let token = this.$store.getters.getToken
    axios.post('/api/user/ValidateCheck', {'ValidateCheck': 'ValidateCheck'}, {headers: {'token': token}}
    ).then(res => {
      if (res.data.status === 0) {
        console.log(res.data.msg);
        this.$store.commit('setUserInfo', ['点击登录', '未设置'])
      }
    }).catch(err => {
      console.log("Catch:" + err)
    })
  }
}
</script>

<style scoped>

</style>
