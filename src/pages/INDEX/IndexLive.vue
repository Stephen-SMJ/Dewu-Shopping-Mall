<template>
  <div>
    <div class="top-bar">
      <router-link to="/home/indexPost" tag="span" class="top-bar-text">
        <i class="icofont-facebook-messenger" style="color: #09a6e7"></i>发布
      </router-link>
      <router-link to="/home/indexRecommend" tag="span" class="top-bar-text">
        推荐
      </router-link>
      <router-link to="/home/indexLive" tag="span" class="top-bar-text" style="font-weight: bold; font-size: 1.2rem">
        <i class="icofont-silverstripe" style="color: #06c2c3"></i>直播
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexLive"
}
</script>

<style scoped>
.top-bar {
  line-height: 150%;
  text-align: center;
  margin: 2% 0;
  font-size: 1rem;
}
.top-bar-text{
  margin: 2%;
}
</style>