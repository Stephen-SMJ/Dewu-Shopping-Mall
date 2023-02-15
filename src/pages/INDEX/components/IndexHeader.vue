<template>
  <div id="wrap">
    <div class="top-bar">
      <router-link to="/home/indexPost" tag="span" class="top-bar-text">
        <i class="icofont-facebook-messenger" style="color: #09a6e7"></i>发布
      </router-link>
      <router-link to="/home/indexRecommend" tag="span" class="top-bar-text" style="font-weight: bold; font-size: 1.2rem">
        推荐
      </router-link>
      <router-link to="/home/livePic" tag="span" class="top-bar-text">
        <i class="icofont-silverstripe" style="color: #06c2c3"></i>直播
      </router-link>
    </div>
    <div class="mui-content">
      <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl"
             class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll">
            <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
              全部
            </a>
            <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
              穿搭
            </a>
            <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
              球鞋
            </a>
            <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
              手表
            </a>
            <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
              美妆
            </a>
            <a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
              男士理容
            </a>
            <a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
              玩具
            </a>
            <a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
              帽子
            </a>
            <a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
              国潮
            </a>
          </div>
        </div>
      </div>
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
.mui-control-item{
  font-size: 0.8rem;
  padding: 0 0.8rem !important;
}
.mui-scroll {
  background: white;
}
.mui-active{
  color: black !important;
  font-weight: bold;
  font-size: 1rem;
}
.top-bar {
  line-height: 150%;
  text-align: center;
  margin: 2% 0;
  font-size: 1rem;
}
.top-bar-text{
  margin: 2%;
}
#wrap{
  position: fixed;
  background-color: white;
}
</style>
