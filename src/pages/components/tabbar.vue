<template>
  <div>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <div class="iconfont">&#xe621;</div>
        <div class="text">动态</div>
      </router-link>
      <router-link class="mui-tab-item" to="/shop">
        <div class="iconfont">&#xe60a;</div>
        <div class="text">购物</div>
      </router-link>
      <router-link class="mui-tab-item" to="/message">
        <div class="iconfont">&#xe62c;</div>
        <div class="text">消息</div>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcart">
        <div class="iconfont">&#xe69e;</div>
        <div class="text">购物车</div>
      </router-link>
      <router-link class="mui-tab-item" to="/my">
        <div class="iconfont">&#xe64f;</div>
        <div class="text">我的</div>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "tabbar"
}
</script>

<style scoped>
.text{
  font-size: 13px;
}
.mui-active{
  color: black !important;
  font-weight: bolder !important;
}
</style>
