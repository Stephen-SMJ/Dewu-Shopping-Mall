<template>
  <div>
    <index-header></index-header>
    <div class="waterfall">
      <div class="item" v-for="(item,index) in passageList" :key="index">
        <div class="item-content">
          <img alt="" width="100%"
               :src="item.image">
          <div class="item-content-text">
            {{ item.name }}
          </div>
          <div class="item-content-bottom">
            <div class="recommend-user">
              <img class="recommend-user-avatar" alt=""
                   :src="item.userhead">
              <p class="recommend-user-name">{{ item.user }}</p>
            </div>
            <div class="vote">
              <i class="icofont-thumbs-up"></i>
              <span class="vote-text" @click="addLike(item.id)">{{ item.like }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p style="margin-bottom: -1%; text-align: center; font-size: 0.7rem">|</p>
    <p style="margin-bottom: -1%; text-align: center; font-size: 0.7rem">已经到底了</p>
    <p style="margin-bottom: 20%; text-align: center; font-size: 0.7rem">|</p>
  </div>
</template>

<script>
import IndexHeader from "@/pages/INDEX/components/IndexHeader";
import axios from 'axios'

export default {
  name: "Recommend",
  components: {
    IndexHeader
  },
  data() {
    return {
      passageList: []
    }
  },
  methods: {

    addLike(id) {
      axios.post('/api/passage/addLike', {
        method: "addLike",
        passageId: this.passageList[id - 1].id,
        passageLike: this.passageList[id - 1].like + 1
      },);
      this.passageList[id - 1].like++;
    }
  },
  created() {
    axios.post('/api/passage/getPassage').then(res => {
      this.passageList = res.data;
      console.log(res.data)
    })
  }
}
</script>

<style scoped>
.waterfall {
  column-count: 2;
  column-gap: 0;
  padding-bottom: 5%;
  padding-top: 5rem;
  text-align: left;
}

.item {
  box-sizing: border-box;
  break-inside: avoid;
  padding: 2%;

}

.item-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2%;
  height: auto;
  font-family: "Microsoft Yahei", sans-serif;
  box-sizing: border-box;
  border-radius: 2%;
  background-color: #ffffff;
  border: 1px solid #cecece;
}

.item-content-text {
  padding-top: 2%;
  font-size: .8rem;
  color: #606266
}

.item-content-bottom {
  padding-top: 2%;
  vertical-align: center;
}

.recommend-user-avatar {
  width: 15%;
  vertical-align: middle;
  border-radius: 50%;
}

.recommend-user-name {
  font-size: 0.7rem;
  display: inline-block;
  padding-left: 6%;
  margin: auto;
  color: #606266;
}

.recommend-user {
  width: 70%;
  display: inline-block;
}

.vote {
  width: 30%;
  display: inline-block;
  text-align: right;
  color: #606266
}

.vote-text {
  font-size: 0.7rem;
}
</style>
