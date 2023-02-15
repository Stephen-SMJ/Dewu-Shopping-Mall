<template>
  <div>
    <div class="top-bar">
      <router-link to="/home/indexPost" tag="span" class="top-bar-text">
        <i class="icofont-facebook-messenger" style="color: #09a6e7"></i>发布
      </router-link>
      <router-link to="/home/indexRecommend" tag="span" class="top-bar-text">
        推荐
      </router-link>
      <router-link to="/home/livePic" tag="span" class="top-bar-text" style="font-weight: bold; font-size: 1.2rem">
        <i class="icofont-silverstripe" style="color: #09a6e7"></i>直播
      </router-link>
    </div>
    <div class="waterfall">
      <div class="item">
        <router-link to="/home/indexLive" class="video-pic">
          <img src="../../../public/static/images/video/video_image/56582024_p0.png" alt="">
        </router-link>
        <div class="video-title">info_title_1</div>
        <div class="video-author">
          <img class="author-img" src="../../../public/static/images/video/author_img/original.jpg" alt="">
          <span class="小明">小明</span>
        </div>
        <div class="video-info">
          <span class="iconfont">&#xe62e;</span>
          <span class="like">2333</span>
        </div>
      </div>
      <div class="item">
        <router-link to="/home/indexLive" class="video-pic">
          <img src="../../../public/static/images/video/video_image/56582024_p0.png" alt="">
        </router-link>
        <div class="video-title">info_title_1</div>
        <div class="video-author">
          <img class="author-img" src="../../../public/static/images/video/author_img/original.jpg" alt="">
          <span class="小明">小明</span>
        </div>
        <div class="video-info">
          <span class="iconfont">&#xe62e;</span>
          <span class="like">2333</span>
        </div>
      </div>
      <div class="item">
        <router-link to="/home/indexLive" class="video-pic">
          <img src="../../../public/static/images/video/video_image/56582024_p0.png" alt="">
        </router-link>
        <div class="video-title">info_title_1</div>
        <div class="video-author">
          <img class="author-img" src="../../../public/static/images/video/author_img/original.jpg" alt="">
          <span class="小明">小明</span>
        </div>
        <div class="video-info">
          <span class="iconfont">&#xe62e;</span>
          <span class="like">2333</span>
        </div>
      </div>
      <div class="item">
        <router-link to="/home/indexLive" class="video-pic">
          <img src="../../../public/static/images/video/video_image/56582024_p0.png" alt="">
        </router-link>
        <div class="video-title">info_title_1</div>
        <div class="video-author">
          <img class="author-img" src="../../../public/static/images/video/author_img/original.jpg" alt="">
          <span class="小明">小明</span>
        </div>
        <div class="video-info">
          <span class="iconfont">&#xe62e;</span>
          <span class="like">2333</span>
        </div>
      </div>
      <div class="item">
        <router-link to="/home/indexLive" class="video-pic">
          <img src="../../../public/static/images/video/video_image/56582024_p0.png" alt="">
        </router-link>
        <div class="video-title">info_title_1</div>
        <div class="video-author">
          <img class="author-img" src="../../../public/static/images/video/author_img/original.jpg" alt="">
          <span class="小明">小明</span>
        </div>
        <div class="video-info">
          <span class="iconfont">&#xe62e;</span>
          <span class="like">2333</span>
        </div>
      </div>
      <div class="item">
        <router-link to="/home/indexLive" class="video-pic">
          <img src="../../../public/static/images/video/video_image/56582024_p0.png" alt="">
        </router-link>
        <div class="video-title">info_title_1</div>
        <div class="video-author">
          <img class="author-img" src="../../../public/static/images/video/author_img/original.jpg" alt="">
          <span class="小明">小明</span>
        </div>
        <div class="video-info">
          <span class="iconfont">&#xe62e;</span>
          <span class="like">2333</span>
        </div>
      </div>
      <div class="item">
        <router-link to="/home/indexLive" class="video-pic">
          <img src="../../../public/static/images/video/video_image/56582024_p0.png" alt="">
        </router-link>
        <div class="video-title">info_title_1</div>
        <div class="video-author">
          <img class="author-img" src="../../../public/static/images/video/author_img/original.jpg" alt="">
          <span class="小明">小明</span>
        </div>
        <div class="video-info">
          <span class="iconfont">&#xe62e;</span>
          <span class="like">2333</span>
        </div>
      </div>
    </div>
    <p style="margin-bottom: -1%; text-align: center; font-size: 0.7rem">|</p>
    <p style="margin-bottom: -1%; text-align: center; font-size: 0.7rem">已经到底了</p>
    <p style="margin-bottom: 20%; text-align: center; font-size: 0.7rem">|</p>
  </div>
</template>

<script>

export default {
  name: "livePic",
  components: {}
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

.waterfall {
  text-align: left !important;
  font-family: "微軟正黑體 Light", sans-serif;
  background-color: #efefef;
  column-count: 2;
  column-gap: 0.2rem;
  padding-bottom: 5%;

}

.item {
  box-sizing: border-box;
  break-inside: avoid;
  background-color: white;
  padding: 2%;
  border-radius: 0.25rem;
}

.video-pic img {
  width: 100%;
  border-radius: 0.25rem;
}

.video-title {
  font-size: 1.1rem;
  margin-left: 3px;
  margin-bottom: 7px;
}

.video-author {
  margin-top: 0.9rem;
  position: relative;
}

.video-author .author-img {
  margin-left: 3px;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 0.9rem;
}

.video-author .小明 {
  font-size: 0.9rem;
  margin-right: 3px;
  position: absolute;
  right: 0;
  color: #353539;
}

.video-info {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
  margin-top: 0.5rem;
}

.video-info .iconfont {
  margin-left: 3px;
  font-size: 13px;
  color: #e56f8b;
}

.video-info .like {
  margin-right: 3px;
  font-size: 13px;
  color: #616161;
  right: 0;
}
</style>
