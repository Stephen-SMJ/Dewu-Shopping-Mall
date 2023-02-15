<template>
  <div class="mui-content">
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl"
           class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <router-link to="/shop" class="mui-control-item" href="#item1mobile" data-wid="tab-top-subpage-1.html">
            推荐
          </router-link>
          <router-link to="/shop/page1" class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
            潮服
          </router-link>
          <router-link to="/shop/page2" class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
            鞋类
          </router-link>
          <router-link to="/shop/page3" class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
            手表
          </router-link>
          <router-link to="/shop/page4" class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
            箱包
          </router-link>
          <router-link to="/shop/page5" class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
            配饰
          </router-link>
          <router-link to="/shop/page6" class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-7.html">
            运动
          </router-link>
          <router-link to="/shop/page7" class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-7.html">
            数码
          </router-link>
          <router-link to="/shop/page8" class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-7.html">
            美妆
          </router-link>
          <router-link to="/shop/page9" class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-7.html">
            汽车
          </router-link>
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
  name: "NavBar",
};

</script>

<style scoped>
body {
  background-color: white;
}

* {
  touch-action: pan-y;
}

.mui-active {
  font-weight: bolder;
  font-size: 18px;
  color: black !important;
}

.mui-pull-top-canvas canvas {
  width: 40px;
}

.mui-slider-indicator.mui-segmented-control {
  background-color: #efeff4;
}

.mui-control-item {
  padding: 0 12px !important;
  font-size: 15px !important;
}

.mui-scroll {
  background-color: white !important;
}
</style>
