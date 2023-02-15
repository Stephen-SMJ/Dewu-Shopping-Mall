<template>
  <div class="container">
    <div class="header">
      <div class="top">
        <router-link to="/shop/change" class="jianbie" tag="div">先鉴别后发货 虚拟换装</router-link>
        <router-link to="/shop/category" class="category" tag="div">
          分类
        </router-link>
      </div>
      <div class="search" @click="searchVisible=true">
        <img src="../../../assets/icon/search_icon.png" alt="搜索">
        <span class="text">搜索商品 分类 功效 用户</span>
      </div>
    </div>

    <mt-popup v-model="searchVisible"
              position="right" class="search-content">
      <ul class="searchType">
        <li class="item search-active">商品</li>
        <li class="item">口碑</li>
        <li class="item">用户</li>
        <li class="item">店铺</li>
      </ul>
      <div class="input-block">
        <input type="text" class="search-input" placeholder="搜索 商品 分类 功效">
        <span @click="searchVisible=false" class="cancel">取消</span>
      </div>
      <div class="record-block">
        <ul>
          <li class="hot-item">历史记录</li>
          <li class="hot-item" :key="item" v-for="item in record">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="line"></div>
      <div class="hot-block">
        <ul>
          <li class="hot-item">热搜</li>
          <li class="hot-item" :key="item" v-for="item in hots">
            {{ item }}
          </li>
        </ul>
      </div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  name: 'ShopHeader',
  data() {
    return {
      navs: ['特卖', '极速免税店', '母婴', '轻奢', '服饰', '鞋包', '食品'],
      transitionName: 'slide-right',
      chooseItem: 0,
      searchVisible: false,
      leftVisible: false,
      lefts: ["我的订单", "现金券", "二维码", "宝箱"],
      hots: ["颜值贷", "口红", "面膜", "洗面奶", "防晒喷雾", "香水", "眼影", "眉笔", "遮瑕", "粉饼", "精华", "补水"],
      record: ["中国李宁", "Nike", "阿迪达斯", "T恤", "防晒", "眼镜", "Mac350", "机械键盘", "罗技k350", "The North face", "stussy", "NBA球衣"]
    }
  }
}
</script>

<style scoped>
.container {
  background-color: white;
  margin-top: 0;
}

.search {
  height: 2rem;
  padding-top: .25rem;
  display: inline-block;
  width: 91%;
  background: whitesmoke;
  border-radius: 5px;
  text-align: left;
  font-size: .446667rem;
  color: rgba(7, 17, 27, .6);
  vertical-align: center;
}

img {
  width: 1.6rem;
  height: 1.6rem;
  vertical-align: middle;
}

.text {
  height: .7rem;
  display: inline-block;
  line-height: .7rem;
  font-size: .7rem;
}

.jianbie {
  font-family: "Microsoft YaHei UI";
  font-weight: bolder;
  display: inline-block;
  float: left;
  margin: 10px 17px 10px 17px;
}

.category {
  display: inline-block;
  font-weight: bolder;
  float: right;
  margin: 10px 17px 10px 17px;
}

.search-content {
  width: 100%;
  height: 100%;
}

ul {
  padding-left: 20px;
}

.cancel {
  display: inline-block;
  height: 1rem;
  width: 3rem;
  text-align: right;
  font-size: 1rem;
  color: #6d6d72;
}

.search-input {
  width: 16rem;
  height: 2rem;
  display: inline-block;
  font-size: .7rem;
  padding-left: .8rem;
  background-color: whitesmoke;
  border: none;

}

.hot-block {
  margin: 0.625rem .7rem 0rem 0.4125rem;
  font-size: 0.4rem
}

.record-block {
  margin: 0.625rem .7rem 0rem 0.4125rem;
  font-size: 0.4rem
}

.hot-item {
  list-style: none;
  height: 1.6rem;
  line-height: 1.2rem;
  min-width: 1rem;
  padding: 0.14rem 0.16rem;
  text-align: center;
  margin: 0rem 0.6rem 0.6rem 0rem;
  display: inline-block;
  font-size: .9rem;
  background-color: whitesmoke;
}

.hot-item:first-child {
  border: none;
  width: 4rem;
  font-weight: bolder;
  background: none;
  text-align: left;
  display: block;
}

.searchType {
  text-align: center;
  padding-left: 0;
}

.searchType li {
  display: inline-block;
  margin: 0 20px;
  text-align: center;
  font-size: 15px;
  color: #6d6d72;
}

.search-active {
  font-weight: bolder;
  color: black !important;
}
</style>
