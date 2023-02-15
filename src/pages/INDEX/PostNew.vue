<template>
  <div>
    <div class="top-bar">
      <router-link to="/home/indexPost" tag="span" class="top-bar-text" style="font-weight: bold; font-size: 1.2rem">
        <i class="icofont-facebook-messenger" style="color: #09a6e7"></i>发布
      </router-link>
      <router-link to="/home/indexRecommend" tag="span" class="top-bar-text">
        推荐
      </router-link>
      <router-link to="/home/indexLive" tag="span" class="top-bar-text">
        <i class="icofont-silverstripe" style="color: #06c2c3"></i>直播
      </router-link>
    </div>
    <div class="main_content">
      <input id="PostNew_title" placeholder="标题" v-model="name">
      <hr>
      <textarea id="PostNew_content" placeholder="正文" v-model="content"></textarea>
    </div>
    <div style="text-align: center; padding: 5px">
      <button onclick="alert('发布成功')" @click="publish">发布</button>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
export default {
  name: "PostNew",
  data(){
    return{
      name:'',
      content:'',
      image:'https://img14.360buyimg.com/n7/jfs/t1/189852/32/1982/59294/6095e6f1E90d5d66a/01738bfa30553f26.jpg',
      user:'smj',
      userhead:'https://storage.360buyimg.com/i.imageUpload/6a645f3665313535663063303933613431363132343530353839343038_mid.jpg',
      like:0
    }
  },
  methods:{
    publish(){
      axios.post('/api/passage/publish', {
        method: "publish",
        passageName: this.name,
        passageImage: this.image,
        passageUser: this.user,
        passageHead: this.userhead,
      }, );
    }
  }
}
</script>

<style scoped>
.top-bar {
  line-height: 150%;
  text-align: center;
  margin: 2% 0;
  font-size: 1rem;
}

.top-bar-text {
  margin: 2%;
}

input::-webkit-input-placeholder {

  font-weight: bold;
}

textarea::-webkit-input-placeholder {

}

hr {
  margin: 0 5%;
  border-left: 0;
  border-right: 0;
}

.main_content {
  margin: 0 0;
  background-color: white;
  border-top: #757575 solid 1px;
  border-bottom: #757575 solid 1px;
}

#PostNew_title {
  color: #757575;
  height: 40px;
  width: 100%;
  padding: 10px;
  font-weight: bold;
  border: 0;
}

#PostNew_content {
  color: #757575;
  padding: 10px;
  height: 150px;
  vertical-align: center;
  border: 0;
}
</style>