<template>
  <div class="all">
    <div class="text_banner">
      <p>注册新账户</p>
    </div>
    <div class="content">
      <div class="item">
        <input id="account" placeholder="输入账号" spellcheck="false" v-model="reg_username">
      </div>
      <div class="item">
        <input id="password" placeholder="输入密码" spellcheck="false" v-model="reg_password">
      </div>
      <div class="item">
        <input id="password_check" placeholder="确认密码" spellcheck="false" v-model="check_reg_password">
      </div>
      <div class="info">
        <span>已有账号？<router-link to="/user/login" tag="span" class="to_login">现在登录</router-link></span>
      </div>
      <div class="login">
        <button @click="Register">注册</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "logininput",
  data() {
    return {
      reg_username: '',
      reg_password: '',
      check_reg_password: ''
    }
  },
  methods: {
    Register() {
      if(this.reg_password === this.check_reg_password){
        this.$emit('getRegisterData', [this.reg_username, this.reg_password])
      }else{
        alert("请确认两次输入的密码一致")
      }
    }
  }
}
</script>

<style scoped>
.all {
  font-family: "微軟正黑體 Light", sans-serif;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  margin: 0 15%;
  height: 100%;
}

.content .item {
  text-align: center;
  margin-top: 0.5rem;
}

.content .info {
  margin-top: 0.8rem;
  font-size: 0.8rem;
}

.content .info .to_login {
  color: #007aff;
}

.content input {
  height: 2rem;
  width: 100%;
  outline: none;
  border: 0;
  border-bottom: 1px solid #6d6d6d;
  margin-top: 0.5rem;
  background-color: rgba(255, 255, 255, 0);
  transition: 0.5s all;
  padding: 0 15px;
}

.content input:focus {
  border-bottom: 1px solid black;
  transition: 0.5s all;
}

.content .login {
  text-align: center;
}

.content button {
  margin-top: 2rem;
  width: 100%;
  height: 2.5rem;
  background-color: #282828;
  color: #c6c6c6;
}

.text_banner {
  text-align: center;
  margin: 15% 10%;
}

.text_banner p {
  color: black;
  font-weight: bold;
  font-size: 20px;
}

input::-webkit-input-placeholder {
  font-size: 14px;
}
</style>
