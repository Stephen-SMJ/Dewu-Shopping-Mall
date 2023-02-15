<template>
  <div class="all">
    <div class="user-info">
      <div class="bb">
        <img class="user-img" src="../../../assets/images/dewu.jpg" alt="">
      </div>
      <div class="user-text" v-if="username === '点击登录'">
        <router-link to="/user/login" tag="div" class="user-name">{{ username }}</router-link>
        <router-link to="/user/login" tag="div" class="user-sig">{{ user_signature }}</router-link>
      </div>
      <div class="user-text-a" v-else>
        <div>
          <div class="user-name">{{ username }}</div>
          <div class="user-sig">{{ user_signature }}</div>
        </div>
        <div class="logout">
          <p @click="Logout" style="display: inline-block">退出登录</p>
        </div>
      </div>
    </div>

    <div class="sub_info">
      <div class="fans">
        <div class="num">0</div>
        <div class="text">粉丝</div>
      </div>

      <div class="follow">
        <div class="num">0</div>
        <div class="text">关注</div>
      </div>

      <div class="post">
        <div class="num">0</div>
        <div class="text">帖子</div>
      </div>

      <div class="moment">
        <div class="num">0</div>
        <div class="text">动态</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "userInfo",
  props: ['user_info'],
  data() {
    return {
      username: localStorage.username,
      user_signature: localStorage.user_signature
    }
  },
  methods: {
    Logout() {
      this.$emit('Logout')
      window.location.reload()
    }
  }
}
</script>

<style scoped>
.all {
  font-family: "微軟正黑體 Light", sans-serif;
  text-align: left;
}

.user-info {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  margin-top: 2.5rem;
  padding-left: 1.5rem;
  width: 100%;
  position: relative;
}

.user-info .user-name {
  font-size: 1.2rem;
}

.user-info .user-sig {
  margin-top: 0.5rem;
  font-size: 0.7rem;
}

.user-info .user-img {
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
}

.user-info .user-text {
  left: 4rem;
  padding-left: 1rem;
  vertical-align: middle;
}

.user-info .user-text-a {
  left: 4rem;
  padding-left: 1rem;
  vertical-align: middle;

}

.user-info .user-text-a .logout {
  position: absolute;
  margin-left: 13rem;
  margin-top: -3rem;
  font-weight: bold;
}

.user-info .user-text-a .logout p{
  color: black
}

.sub_info {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}

.sub_info .num {
  text-align: center;
  font-weight: bold;
}

.sub_info .text {
  text-align: center;
  font-size: 12px;
}

</style>
