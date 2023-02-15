<template>
  <div class="container">
    <detail-header></detail-header>
    <detail-swipper :comList="comList"></detail-swipper>
    <detail-intro :comList="comList"></detail-intro>
    <detail-comment></detail-comment>
    <detail-footer @addToCart="addToCart" @buyNow="buyNow"></detail-footer>
  </div>
</template>

<script>
import detailHeader from "@/pages/SHOP/components/navlinks/components/detailHeader";
import detailFooter from "@/pages/SHOP/components/navlinks/components/detailFooter";
import detailIntro from "@/pages/SHOP/components/navlinks/components/detailIntro";
import detailSwipper from "@/pages/SHOP/components/navlinks/components/detailSwipper";
import detailComment from "@/pages/SHOP/components/navlinks/components/detailComment";
import axios from 'axios'

export default {
  props: ['id'],
  data() {
    return {
      imageList: []
    }
  },
  components: {
    detailIntro,
    detailHeader,
    detailFooter,
    detailSwipper,
    detailComment
  },
  methods: {
    getHomeData() {
      axios.get('/api/goods/getGoods').then(this.getHomeDataSucc);
    },
    getHomeDataSucc(res) {
      res = res.data;
      if (res.flag && res.data) {
        var data = res.data
        this.imageList = data.imageList
      }
    },
    addToCart() {
      let token = this.$store.getters.getToken
      axios.post('/api/goods/addToCart', {
        GoodId: this.id,
        GoodName: this.imageList[this.id].name,
        GoodImg: this.imageList[this.id].src,
        GoodPrice: this.imageList[this.id].money,
        select: true
      }, {headers: {'token': token}})
    },
    buyNow(){
      let token = this.$store.getters.getToken
      axios.post('/api/goods/buyNow', {
        GoodId: this.id,
        GoodName: this.imageList[this.id].name,
        GoodImg: this.imageList[this.id].src,
        GoodPrice: this.imageList[this.id].money,
        select: true
      }, {headers: {'token': token}})
    }
  },
  computed: {
    comList() {
      var comList = [];
      for (var i = 0; i < this.imageList.length; i++) {
        if (this.id === this.imageList[i].id) {
          comList[0] = this.imageList[i]
        }
      }
      return comList
    }
  },
  mounted() {
    this.getHomeData()
  }
};

</script>
<style scoped>
.container {
  text-align: center;
  width: 100%;
}

</style>
