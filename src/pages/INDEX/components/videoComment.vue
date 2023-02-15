<template>
  <div class="all">
    <div class="comment">
      <div class="author-info">
        <div class="video-author">
          <img class="author-img" src="../../../../public/static/images/video/author_img/original.jpg" alt="">
          <span class="author-name">小明</span>
          <div class="follow">
            <span class="text">follow</span>
            <span class="iconfont">&#xe62a;</span>
          </div>
        </div>
        <div class="video-info">拍屏嗷拍屏</div>
      </div>

      <div class="comment-title">comment</div>

      <div class="all-comment">
        <div class="user-comment">
          <div class="user-info">
            <img class="user-img" src="../../../../public/static/images/video/author_img/original.jpg" alt="">
            <span class="user-name">小中明</span>
          </div>
          <div class="comment-info">666</div>
          <div class="aa">
            <div class="like">
              <span class="iconfont ">&#xe62e;</span>
              <span class="num">123</span>
            </div>
            <div class="dislike">
              <span class="iconfont ">&#xe607;</span>
              <span class="num">12</span>
            </div>
          </div>
        </div>

        <div class="user-comment">
          <div class="user-info">
            <img class="user-img" src="../../../../public/static/images/video/author_img/original.jpg" alt="">
            <span class="user-name">中明</span>
          </div>
          <div class="comment-info">2333</div>
          <div class="aa">
            <div class="like">
              <span class="iconfont ">&#xe62e;</span>
              <span class="num">123</span>
            </div>
            <div class="dislike">
              <span class="iconfont ">&#xe607;</span>
              <span class="num">12</span>
            </div>
          </div>
        </div>

        <div class="user-comment" >
          <div class="user-info">
            <img class="user-img" src="../../../../public/static/images/video/author_img/original.jpg" alt="">
            <span class="user-name">中大明</span>
          </div>
          <div class="comment-info">nb</div>
          <div class="aa">
            <div class="like">
              <span class="iconfont ">&#xe62e;</span>
              <span class="num">123</span>
            </div>
            <div class="dislike">
              <span class="iconfont ">&#xe607;</span>
              <span class="num">12</span>
            </div>
          </div>
        </div>

        <div class="user-comment">
          <div class="user-info">
            <img class="user-img" src="../../../../public/static/images/video/author_img/original.jpg" alt="">
            <span class="user-name">大明</span>
          </div>
          <div class="comment-info">az</div>
          <div class="aa">
            <div class="like">
              <span class="iconfont ">&#xe62e;</span>
              <span class="num">123</span>
            </div>
            <div class="dislike">
              <span class="iconfont ">&#xe607;</span>
              <span class="num">12</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "videoComment",
}

</script>

<style scoped>
.all {
  font-family: "微軟正黑體 Light", sans-serif;
  padding-bottom: 3.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: left !important;
}

.video-author {
  position: relative;
}

.video-author .author-name{
  margin-top: 0.3rem;
}

.video-author .follow{
  padding: 1.2%;
  position: absolute;
  right: 1rem;
  margin-top: -2.2rem;
  border: 0.01rem solid #ececec;
  border-radius: 0.3rem;
}

.video-author .follow .text{
  font-size: 1rem;
  margin-right: 0.2rem;
}

.video-author .follow .iconfont{
  margin-top: 0.3rem;
  color: #707070;
}

.video-info {
  font-size: 0.7rem;
}

.video-author {
  padding-top: 1rem;
}

.video-author .author-img {
  margin-left: 3px;
  height: 2rem;
  width: 2rem;
  border-radius: 0.9rem;
}

.video-author .author-name {
  margin-right: 3px;
  position: absolute;
  left: 3rem;
  color: #353539;
}

.all-comment{
  margin-top: 1rem;
}

.comment-title {
  padding-top: 1.5rem;
  font-weight: bold;
}

.user-comment {
  padding: 2%;
  margin: 0.2rem 0.2rem 1rem 0.2rem;
  background-color: #f8f8f8;
  border-radius: 0.3rem;
}

.user-comment .user-info {
  position: relative;
}

.user-comment .user-info .user-img {
  margin-left: 0.5rem;
  height: 1.7rem;
  width: 1.7rem;
  border-radius: 0.9rem;
}

.user-comment .user-info .user-name {
  font-size: 0.8rem;
  margin-left: -0.5rem;
  position: absolute;
  left: 3rem;
  color: #353539;
}

.user-comment .comment-info {
  width: 70%;
  font-size: 1rem;
  margin-left: 0.5rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}

.user-comment {
  position: relative;
}

.user-comment .aa{
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;

}

.user-comment .aa .num{
  font-size: 0.7rem;
}

.user-comment .aa .like{
  margin-right: 0.6rem;
}

.user-comment .aa .like .iconfont{
  margin-top: 1rem;
  color: #e57cad;
  font-size: 0.8rem;
}

.user-comment .aa .dislike .iconfont{
  margin-top: 1rem;
  color: #707070;
  font-size: 0.8rem;
}

</style>
