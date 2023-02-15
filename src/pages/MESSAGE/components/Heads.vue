<template>
  <section class="top">
    <img class="head" src="../../../assets/default.png" alt=""/>
    <p class="name">客服</p>
    <router-link to="/message" tag="span" class="voice">
      <i class="icofont-logout" style="color: #444444"></i>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'heads',
  data() {
    return {
      voiceOpen: true
    }
  }
}
</script>
<style scoped>
.top {
  height: 60px;
  line-height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #E0E0E0;
  padding: 5px 10px;
}

.top .head {
  width: 45px;
  height: 45px;
  float: left;
  border-radius: 100%;
}

.top .name {
  display: inline-block;
  margin-left: 20px;
  font-size: 18px;
  color: #444;
  height: 50px;
  line-height: 50px;
  vertical-align: middle;
}

.top .voice {
  width: 60px;
  height: 50px;
  float: right;
  line-height: 50px;
  text-align: center;
}
</style>
