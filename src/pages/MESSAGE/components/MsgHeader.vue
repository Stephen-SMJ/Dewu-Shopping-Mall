<template>
  <div id="wrap">
    <div class="top-bar">

      <router-link to="" tag="span" class="top-bar-text" style="font-weight: bold; font-size: 1.2rem">
        消息
      </router-link>

    </div>
  </div>
</template>

<script>
import mui from '../../../lib/js/mui'

mui('.mui-scroll-wrapper').scroll({
  deceleration: 0.0005
});
export default {
  name: "IndexHeader"
}

</script>

<style scoped>
.top-bar {
  line-height: 150%;
  text-align: center;
  padding: 20px 0;
  font-size: 1rem;
}
.top-bar-text{
  margin: 2%;
}
#wrap{
  background-color: white;
  height: auto;
}
</style>
