<template>
  <div class="all">
    <div class="tools_title">
      <p>小工具</p>
    </div>
    <div class="content">
      <div class="item">
        <div class="tool_name">
          <i class="icofont icofont-law-order"></i>
        </div>
        <div class="title">鉴别服务</div>
      </div>
      <div class="item">
        <div class="tool_name">
          <i class="icofont icofont-washing-machine"></i>
        </div>
        <div class="title">焕然洗护</div>
      </div>
      <div class="item">
        <div class="tool_name">
          <i class="icofont icofont-loop"></i>
        </div>
        <div class="title">闲置转卖</div>
      </div>
    </div>
    <div class="content">
      <div class="item">
        <div class="tool_name">
          <i class="icofont icofont-hat-alt"></i>
        </div>
        <div class="title">学生专区</div>
      </div>
      <div class="item">
        <div class="tool_name">
          <i class="icofont icofont-bell"></i>
        </div>
        <div class="title">发售提醒</div>
      </div>
      <div class="item">
        <div class="tool_name">
          <i class="icofont icofont-question-circle"></i>
        </div>
        <div class="title">达人问答</div>
      </div>
    </div>
    <div class="content">
      <div class="item">
        <div class="tool_name">
          <i class="icofont icofont-search-2"></i>
        </div>
        <div class="title">兴趣达人</div>
      </div>
      <div class="item">
        <div class="tool_name">
          <i class="icofont icofont-resize"></i>
        </div>
        <div class="title">尺码管理</div>
      </div>
      <div class="item">
        <div class="tool_name">
          <i class="icofont icofont-license"></i>
        </div>
        <div class="title">证书申请</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sortInfo"
}
</script>

<style scoped>
.all {
  font-family: "微軟正黑體 Light", sans-serif;
  padding-top: 1rem;
  margin: 0 5%;
}

.content{
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  padding-top: 1rem;
}
.content .item .tool_name{
  font-size: 20px;
  height: 40px;

  margin: 0 auto;
  text-align: center;

}
.icofont{
  padding: 10px;
  background-color: #f4f4f4;
  border-radius: 50%;
}
.content .item .title {
  font-size: 12px;
  text-align: center;
}
.tools_title{
 text-align: left;
}
.tools_title p{
  font-size: 15px;
  font-weight: bold;
  color: black;
}

</style>
