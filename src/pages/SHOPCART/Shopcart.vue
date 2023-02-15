<template>
  <div id="shopping-cart" class="page-shopping-cart">
    <h4 class="cart-title">购物车</h4>

    <div class="cart-product-title clearfix">
      <div class="td-check fl" style="width: 50%">

        <span class="check-span fl check-all" :class="{'check-true':isSelectAll}"
              @click="selectProduct(isSelectAll)"></span>
        全选
      </div>
    </div>

    <div class="cart-product clearfix">
      <div v-for='(item,index) in productList' :key="index" class="box">
        <div class="td-check">
          <span class="check-span" @click='reverseSelect(index)' :class="{'check-true':item.select}"></span>
        </div>
        <div class="td-product">
          <img :src="item.pro_img" width="60px" alt="">
        </div>
        <div class="td-price">
          <p class="red-text">￥<span class="price-text">{{ item.pro_price.toFixed(2) }}</span>.00</p>
        </div>
        <div class="product-info">
          <p class="name">{{ item.pro_name }}</p>
        </div>
        <div class="td-do">
          <a href="javascript:;" class="product-delete" @click='deleteOneProduct(index)'>删除</a>
        </div>
        <div class="product-num">
          <a href="javascript:;" class="num-reduce num-do fl" @click='reduceGoodNum(index)'><span>-</span></a>
          <input type="text" class="num-input" v-model='item.pro_num' readonly>
          <a href="javascript:;" class="num-add num-do fr" @click='addGoodNum(index)'><span>+</span></a>
        </div>
      </div>
    </div>

    <div class="cart-product-info">
      <a href="javascript:;" class="delete-product" @click='deleteProduct'>删除所选商品</a>
      <a href="javascript:;" class="keep-shopping">继续购物</a>
      <a href="javascript:;" class="fr btn-buy" @click="Buy">去结算</a>
      <a href="javascript:;" class="fr product-total">￥<span>{{ getTotal.totalPrice }}</span></a>
    </div>
  </div>

</template>
<script>

import axios from "axios";
import router from "@/router";

export default {
  name: "shopCart",
  data() {
    return {
      productList: [],
      timer: null
    }
  },
  computed: {
    isSelectAll: function () {
      return this.productList.every(function (val) {
        return val.select
      })
    },

    getTotal: function () {
      var _proList = this.productList.filter(function (val) {
            return val.select
          }),
          totalPrice = 0;
      for (var i = 0; i < _proList.length; i++) {
        totalPrice += _proList[i].pro_num * _proList[i].pro_price;
      }
      return {totalNum: _proList.length, totalPrice: totalPrice}
    }
  },
  methods: {
    // 反选
    reverseSelect: function (index) {
      this.timer = null
      this.timer = setTimeout(() => {
        let token = this.$store.getters.getToken
        axios.post('/api/goods/OperateCart', {
          method: "updateSelect",
          GoodId: this.productList[index].pro_id
        }, {headers: {'token': token}})
      }, 500)
      this.productList[index].select = !this.productList[index].select
    },
    // 全选与取消全选
    selectProduct: function (_isSelect) {
      let token = this.$store.getters.getToken
      if(!_isSelect){
        axios.post('/api/goods/OperateCart', {
          method: "setAllSelected"
        }, {headers: {'token': token}})
      }else {
        axios.post('/api/goods/OperateCart', {
          method: "setAllUnselected"
        }, {headers: {'token': token}})
      }
      for (var i = 0; i < this.productList.length; i++) {
        this.productList[i].select = !_isSelect
      }
    },

    //删除选中的产品
    deleteProduct: function () {
      let deleteGoodIdArr = []
      this.productList = this.productList.filter(function (item) {
        if(item.select){
          deleteGoodIdArr.push(item.pro_id)
        }
        return !item.select
      })
      let token = this.$store.getters.getToken
      axios.post('/api/goods/OperateCart', {
        method: "deleteMultiGood",
        delGoodId: deleteGoodIdArr,
      }, {headers: {'token': token}})
    },
    //删除单条产品
    deleteOneProduct: function (index) {
      let token = this.$store.getters.getToken
      axios.post('/api/goods/OperateCart', {
        method: "deleteGood",
        GoodId: this.productList[index].pro_id,
      }, {headers: {'token': token}})
      //根据索引删除productList的记录
      this.productList.splice(index, 1);
    },
    addGoodNum(index) {
      let token = this.$store.getters.getToken
      axios.post('/api/goods/OperateCart', {
        method: "addGoodNum",
        GoodId: this.productList[index].pro_id,
        GoodNum: this.productList[index].pro_num + 1
      }, {headers: {'token': token}})
      this.productList[index].pro_num++
    },
    reduceGoodNum(index) {
      let token = this.$store.getters.getToken
      axios.post('/api/goods/OperateCart', {
        method: "reduceGoodNum",
        GoodId: this.productList[index].pro_id,
        GoodNum: this.productList[index].pro_num - 1
      }, {headers: {'token': token}})
      this.productList[index].pro_num--
    },
    Buy(){
      let token = this.$store.getters.getToken
      axios.post('/api/goods/BuySelected', {},{headers: {'token': token}})
      router.push('/my')
    }
  },
  created() {
    let token = this.$store.getters.getToken
    axios.post('/api/goods/getCart', {}, {headers: {'token': token}}).then(res => {
      this.productList = res.data
    })
  }

};
</script>

<style scoped>
.fl {
  float: left;
}

.fr {
  float: right;
}

.clearfix {
  zoom: 1;
}

.clearfix:after {
  clear: both;
}

.clearfix:after {
  content: '.';
  display: block;
  overflow: hidden;
  visibility: hidden;
  font-size: 0;
  line-height: 0;
  width: 0;
  height: 0;
}

a {
  text-decoration: none;
  color: #333;
}

img {
  vertical-align: middle;
}

.page-shopping-cart {
  width: 100%;
  font-size: 14px;

}

.page-shopping-cart .cart-title {
  color: black;
  font-size: 20px;
  text-align: left;
  padding-left: 20px;
  line-height: 68px;
}

.page-shopping-cart .red-text {
  color: #e94826;
  display: block;
}

.page-shopping-cart .check-span {
  display: inline-block;
  width: 25px;
  height: 25px;
  margin-top: 5px;
  background: url("../../assets/icon/未选.png") no-repeat;
  background-size: 100% 100%;
}

/* 点击时改变勾选 */
.page-shopping-cart .check-span.check-true {
  background: url("../../assets/icon/全选.png") no-repeat;
  background-size: 100% 100%;
}

.box {
  height: 120px;
  border-bottom: #cccccc solid 1px;
}

.page-shopping-cart .td-check {
  width: 10%;
  display: inline-block;
  float: left;
  margin-left: 5px;
}

.page-shopping-cart .td-product {
  width: 40%;
  float: left;
  display: inline-block;
}

.name {
  font-size: 10px;
  display: inline;
}

.cart-product-title {
  text-align: center;
  height: 38px;
  line-height: 38px;
  padding: 0 20px;
  background-color: #f7f7f7;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
}

.cart-product-title .td-product {
  text-align: center;
  font-size: 14px;
}

.cart-product-title .td-check {
  text-align: left;
}

.cart-product-title .td-check .check-span .check-span {
  margin: 9px 6px 0 0;
}

/* 内容开始 */
.cart-product {
  text-align: center;
}

.cart-product {
  width: 100%;
  text-align: center;
  font-size: 14px;
}

.cart-product div {
  padding: 20px 0;
}

.td-price {
  position: relative;
  top: 40px;
  right: 90px;

}

.td-total {
  position: relative;
  left: 100px;
  bottom: 100px;
}

.cart-produc div:last-child {
  border-bottom: none;
}

.product-num {
  display: inline-block;
  position: relative;
  top: -150px;
  right: -130px;

}

.cart-product .product-num .num-do {
  width: 20px;
  height: 20px;
  background: #f7f7f7;
  font-weight: bolder;
  vertical-align: center;
}

.cart-product .product-num .num-input {
  width: 25px;
  height: 28px;
  line-height: 28px;
  border: none;
  text-align: center;
  font-size: 15px;
  padding: 0 5px;
}

.cart-product .td-product {
  text-align: center;
  font-size: 12px;

}

.cart-product .td-product img {
  border: 1px solid #e3e3e3;
  width: 60%;
  position: relative;
  left: -20px;
}

.product-info {
  vertical-align: top;
  position: relative;
  top: -80px;
  right: 40px;
  margin-right: 0 !important;
  text-align: left;
  padding: 0 0;
  width: 35%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.cart-product .td-do {
  font-size: 15px;
  padding-top: 20px;
  position: relative;
  right: -310px;
  top: -130px;
  width: 40px;
}

/* 最后一行统计 */

.cart-product-info {
  height: 50px;
  line-height: 50px;
  background: #f7f7f7;
  padding-left: 10px;
}

.cart-product-info .delete-product {
  color: #666;
}

.cart-product-info .product-total {
  font-size: 14px;
  color: #e94826;
}

.cart-product-info .product-total span {
  font-size: 20px;
}

.cart-product-info .check-num {
  color: #333;
}

.cart-product-info .check-num span {
  color: #e94826;
}

.cart-product-info .keep-shopping {
  color: #666;
  margin-left: 20px;
}

.cart-product-info .btn-buy {
  height: 50px;
  color: #fff;
  font-size: 20px;
  display: block;
  width: 110px;
  background: #ff7700;
  text-align: center;
  margin-left: 20px;
}


/* cart-worder */

.page-shopping-cart .cart-worder {
  padding: 20px;
}

.page-shopping-cart .cart-worder .choose-worder {
  color: #fff;
  display: block;
  background: #39e;
  width: 140px;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
  text-align: center;
  margin-right: 20px;
}

.page-shopping-cart .cart-worder .choose-worder span {
  display: inline-block;
  vertical-align: top;
  margin: 9px 10px 0 0;
  width: 22px;
  height: 22px;
  background: black no-repeat -92px 0;
}

.page-shopping-cart .cart-worder .worker-info {
  color: #666;
}

.page-shopping-cart .cart-worder .worker-info img {
  border-radius: 100%;
  margin-right: 10px;
}

.page-shopping-cart .cart-worder .worker-info span {
  color: #000;
}

.choose-worker-box .box-title a {
  display: block;
  position: absolute;
  top: 15px;
  right: 16px;
  width: 10px;
  height: 10px;
  background: black no-repeat -80px 0;
}

.choose-worker-box .box-title a:hover {
  background: black no-repeat -80px -22px;
}

.choose-worker-box .worker-list {
  padding-top: 30px;
  height: 134px;
  overflow-y: auto;
}

.choose-worker-box .worker-list li {
  float: left;
  width: 25%;
  text-align: center;
  margin-bottom: 30px;
}

.choose-worker-box .worker-list li p {
  margin-top: 8px;
}

.choose-worker-box .worker-list li.cur a {
  color: #f70;
}

.choose-worker-box .worker-list li.cur a img {
  border: 1px solid #f70;
}

.choose-worker-box .worker-list li a:hover {
  color: #f70;
}

.choose-worker-box .worker-list li a:hover img {
  border: 1px solid #f70;
}

.choose-worker-box .worker-list li img {
  border: 1px solid #fff;
  border-radius: 100%;
}
</style>

