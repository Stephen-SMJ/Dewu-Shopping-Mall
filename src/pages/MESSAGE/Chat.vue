<template>
  <div id="wrap">
    <Heads>
    </Heads>
    <ChatList>
    </ChatList>
  </div>
</template>

<script>
import Heads from './components/Heads'
import ChatList from './components/ChatList'

export default {
  name: 'Chat',
  components: {
    Heads,
    ChatList
  }
}
</script>

<style scoped>
@import "../../../node_modules/font-awesome/css/font-awesome.min.css";
body {

  margin: 0px;
  padding: 0px;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;

  overflow: hidden;
}

blockquote,
body,
button,
dd,
div,
dl,
dt,
form,
h1,
h2,
h3,
h4,
h5,
h6,
input,
li,
ol,
p,
pre,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

ul,
li {
  list-style: none;
}

a {
  color: #666;
}


::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #F8F8F8;
}


::-webkit-scrollbar-track {
  background-color: #F8F8F8;
}


::-webkit-scrollbar-thumb {
  background-color: #e2e2e2;
}
#wrap{
  overflow: hidden;
  height: 40px;
}
</style>
