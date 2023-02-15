<template>
  <div id="app">
    <div class="container">
      <transition name="fade">
        <router-view/>
      </transition>
      <tabbar v-if="show" class="tabbar"></tabbar>
    </div>
  </div>
</template>

<script>
import tabbar from './pages/components/tabbar.vue'

export default {
  name: 'App',
  components: {
    tabbar
  },
  data(){
    return{
      show:true
    }
  },
  watch:{
    "$route.path"(newVal){
      if(newVal !== "/detail" && newVal !== "/user/login" && this.$route.path !== "/user/register"){
        this.show = true
      }else {
        this.show = false
      }
    }
  },
  created(){
    if(this.$route.path !== "/detail" && this.$route.path !== "/user/login" && this.$route.path !== "/user/login/register"){
      this.show = true
    }else {
      this.show = false
    }
  }
}
</script>

<style>
body {
  background-color: white !important;
}

* {
  font-family: Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  touch-action: pan-y !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: white;
}


</style>
