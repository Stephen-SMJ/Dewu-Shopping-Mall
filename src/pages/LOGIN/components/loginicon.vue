<template>
  <div class="all">
    <div class="content">
      <div class="item">
        <div class="icon">
          <i class="icofont-twitter icofont"></i>
        </div>
      </div>
      <div class="item">
        <div class="icon">
          <i class="icofont-telegram icofont"></i>
        </div>
      </div>
      <div class="item">
        <div class="icon">
          <i class="icofont-weibo icofont"></i>
        </div>
      </div>
      <div class="item">
        <div class="icon">
          <i class="icofont-wechat icofont"></i>
        </div>
      </div>
    </div>
    <div class="user_policy">
      <input type="checkbox" class="user_policy_checkbox">
      <span>已阅读并同意 <b>用户协议</b></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginicon"
}
</script>

<style scoped>
.all {
  font-family: "微軟正黑體 Light", sans-serif;
  margin-top: 10rem;
  margin-bottom: 0.5rem;
}

.content {
  display: -webkit-flex;
  display: flex;
  margin: 0 15%;
  -webkit-justify-content: space-around;
  justify-content: space-around;
}


.content .item .icon {
  text-align: center;
  color: #606266;
}

.icofont {
  font-size: 25px;
}

.user_policy {
  font-size: 10px;
  text-align: center;
  margin-top: 2rem;
}

.user_policy .user_policy_checkbox {
  vertical-align: middle;
}

</style>
