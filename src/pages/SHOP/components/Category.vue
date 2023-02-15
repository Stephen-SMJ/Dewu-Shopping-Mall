<template>
  <div>
    <div class="top">
      <div class="search">
        <img src="../../../assets/icon/search_icon.png" alt="搜索">
        <label>
          <input type="text" placeholder="搜索商品 分类 功效 用户" class="aa_input" v-model="query">
        </label>
      </div>
      <div class="goback" @click="goback">
        返回
      </div>
    </div>
    <div class="menu">
      <div class="menu-left">
        <ul>
          <li v-for="(item, index) in Result" :key="index" class="menu-item"
              :class="{current:index === currentIndex}" @click="clickList(index)">
            <p class="text">{{ item.name }}</p>
          </li>
        </ul>
      </div>
      <div class="menu-right" ref="itemList">
        <ul>
          <li class="cate" v-for="(menu, index1) in Result" :key="index1">
            <h4 class="cate-title">{{ menu.name }}</h4>
            <ul class="cate-item">
              <li v-for="(item, index2) in menu.sub" :key="index2">
                <a href="#" class="cate-item-wrapper">
                  <div class="cate-item-img">
                    <img :src="item.imgUrl" alt="">
                  </div>
                  <span>{{ item.name }}</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import axios from "axios";

export default {
  name: "Category",
  data() {
    return {
      query: '',
      menus: [],
      rightLiTops: [],
      scrollY: 0
    }
  },
  created() {
    this.$indicator.open({
      text: "加载中..."
    });
    axios.get("/api/goods/getCategory").then(res => {
      this.$indicator.close();
      this.menus = res.data.data.menus
    })
  },
  methods: {
    clickList(index) {
      this.scrollY = this.rightLiTops[index];
      this.rightBscroll.scrollTo(0, -this.scrollY)
    },
    _initBScroll() {
      this.leftBscroll = new BScroll('.menu-left', {
        click: true,
        mouseWheel: true
      });
      this.rightBscroll = new BScroll('.menu-right', {
        click: true,
        mouseWheel: true
      });
      this.rightBscroll = new BScroll('.menu-right', {
        click: true,
        mouseWheel: true,
        probeType: 3
      });
      this.rightBscroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(pos.y)
      })
    },
    _initRightHeight() {
      let itemArray = [];
      let top = 0;
      itemArray.push(top);
      let allList = this.$refs.itemList.getElementsByClassName('cate');
      for (let i = 0; i < allList.length; i++) {
        top += allList[i].clientHeight;
        itemArray.push(top);
      }
      this.rightLiTops = itemArray;
    },
    goback() {
      this.$router.go(-1);
    },
  },
  watch: {
    menus() {
      this.$nextTick(() => {
        this._initBScroll();
        this._initRightHeight()
      })
    }
  },
  computed: {
    currentIndex() {
      const {scrollY, rightLiTops} = this;
      return rightLiTops.findIndex((top, index) => {
        if (scrollY >= top && scrollY < rightLiTops[index + 1]) {
          return true
        }
      })
    },
    Result() {
      var query = this.query.trim().toLowerCase();
      var result = this.menus.filter(function (ele) {
        return ele.name.toLowerCase().indexOf(query) != -1
      });
      return result;
    }
  }
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

.top {
  width: 100%;
  text-align: left;
}


input::-webkit-input-placeholder {
  font-size: 12px;
}

.goback {
  position: absolute;
  right: 15px;
  top: 12px;
  font-size: 15px;
  color: #6d6d72;
}

.search input {
  margin-top: 6px;
  margin-left: 10px;
  height: 2rem;
  padding-top: .5rem;
  padding-left: 2rem;
  display: inline-block;
  width: 80%;
  background: whitesmoke;
  border-radius: 5px;
  text-align: left;
  font-size: .446667rem;
  color: rgba(7, 17, 27, .6);
  vertical-align: center;
}

.search img {
  width: 1.6rem;
  height: 1.6rem;
  margin-top: 9px;
  position: absolute;
  margin-left: 10px;
}

.menu {
  display: flex;
  position: absolute;
  text-align: center;
  top: 40px;
  bottom: 50px;
  width: 100%;
  overflow: hidden;
}

.menu-left {
  width: 60px;
  background: #f3f5f7;
}

.menu-item {
  height: 54px;
  width: 100%;
}

.text {
  width: 100%;
  line-height: 54px;
  margin-bottom: 0;
}

.current {
  width: 100%;
  background: #fff;
}

.current .text {
  color: #339999;
  font-weight: bolder;
}

.menu-right {
  flex: 1;
  background: #fff;
}

.menu-right {
  flex: 1;
  background: #fff;
}

.menu-right .cate {
  height: 100%;
}

.cate-title {
  margin: 0;
  text-align: left;
  font-size: 14px;
  color: #333;
  font-weight: bold;
  padding: 10px;
}

.cate-item {
  padding: 7px 10px 10px;
  display: flex;
  overflow: hidden;
  flex-flow: row wrap;
}

.cate-item li {
  width: 33.3%;
}

.cate-item-wrapper .cate-item-img {
  width: 100%;
}

.cate-item-wrapper .cate-item-img img {
  width: 70px;
  margin: 10px 2px;
}

span {
  display: inline-block;
  font-size: 14px;
  color: #333;
}

</style>
