<template>
  <div>
    <reg-header></reg-header>
    <reg-input @getRegisterData="getRegisterData"></reg-input>
    <loginicon></loginicon>
  </div>
</template>

<script>
import axios from 'axios'

import RegHeader from "./components/regheader"
import RegInput from "./components/reginput"
import Loginicon from "@/pages/LOGIN/components/loginicon";

export default {
  name: "Register",
  components: {
    Loginicon,
    RegHeader,
    RegInput,
  },
  data() {
    return {}
  },
  methods: {
    getRegisterData(data) {
      axios.post('/api/user/register', {
        username: data[0], password: data[1]
      }).then(res => {
        alert(res.data.msg);
      }).catch(err => {
        alert('catch 注册失败' + err)
      })
    }
  }
}

</script>

<style scoped>

</style>
