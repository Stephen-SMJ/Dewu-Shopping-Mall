<template>
  <div class="footer">
    <div class="footer-box footerbox1">
      <div class="collection three">
        <i class="icofont-star" style="color: #20b2aa"></i>
        <div class="text">收藏</div>
      </div>
    </div>
    <div class="footer-box footerbox2">
      <div class="purchase-together two">
        <div @click="addToCart">加入购物车</div>
      </div>
      <div class="purchase-person two">
        <div @click="buyNow">立即购买</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailFooter",
  methods: {
    addToCart() {
      this.$emit('addToCart')
    },
    buyNow() {
      this.$emit('buyNow')
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.footer {
  vertical-align: bottom;
  padding-bottom: 15%;
  position: fixed;
  bottom: 0;
  height: 1px;
  width: 100%;
  overflow: hidden;
  border: 1px solid white;
  background-color: white;
}

.footer-box {
  display: inline-block;
  vertical-align: top;
}

.footerbox1 {
  width: 15%;
  background-color: white
}

.footerbox2 {
  width: 75%
}

.three {
  display: inline-block;
}

.more {
  margin-left: 0.5rem;
}

.three .text {
  font-size: 0.7rem;
}

.two {
  display: inline-block;
  width: 50%;
  float: left;
  height: 100%;
  padding: 0.5rem 0.8rem;
  margin: 0;
  text-align: center;
  color: #fff;
}

.purchase-together {
  background-color: white;
  color: black;
  border: gray solid 1px
}

.purchase-person {
  background-color: lightseagreen;
  border: lightseagreen solid 1px
}

</style>
