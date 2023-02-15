<template>
  <div>
    <msg-header></msg-header>
    <main-content></main-content>
  </div>
</template>

<script>

import MsgHeader from "@/pages/MESSAGE/components/MsgHeader";
import MainContent from "@/pages/MESSAGE/components/MainContent";

export default {
  name: 'Message',
  components: {MainContent, MsgHeader}
}
</script>

<style scoped>

</style>
