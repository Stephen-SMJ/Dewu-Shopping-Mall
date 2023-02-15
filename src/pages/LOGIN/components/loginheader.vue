<template>
  <div class="all">
    <div class="login">
      <div class="title">
        <router-link to="/home" tag="i" class=""><i class="icofont-close close_btn"></i></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginheader"
}
</script>

<style scoped>
.all {
  font-family: "微軟正黑體 Light", sans-serif;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
}

.login {
  position: relative;
}

.login .title {
  text-align: left;
}

.login .other {
  text-decoration: none;
  font-size: 0.8rem;
  position: absolute;
  right: 0;
  margin-top: -0.8rem;
}

.close_btn{
  margin-left: 15px;
  font-size: 25px;
}

</style>
