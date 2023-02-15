<template>
  <div class="all">
    <div>
      <div class="card">
        <div class="small_card">
          <div class="small_card_icon">
            <i class="icofont-ui-check icofont"></i>
          </div>
          <div class="small_card_text">
            <p class="small_card_text_top">每日打卡</p>
          </div>
        </div>
        <div class="small_card">
          <div class="small_card_icon">
            <i class="icofont-notebook icofont"></i>
          </div>
          <div class="small_card_text">
            <p class="small_card_text_top">创作中心</p>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="item">
          <div>
            <div class="t-icon"><i class="icofont-credit-card"></i></div>
            <div class="t-text">待付款</div>
          </div>
        </div>
        <div class="item">
          <div>
            <div class="t-icon"><i class="icofont-box"></i></div>
            <div class="t-text">待发货</div>
          </div>
        </div>
        <div class="item">
          <div>
            <span class="small_num" v-if="num !== 0 && num  !== ''">{{ num }}</span>
            <div class="t-icon"><i class="icofont-truck-loaded"></i></div>
            <div class="t-text">待收货</div>
          </div>
        </div>
        <div class="item">
          <div>
            <div class="t-icon"><i class="icofont-support-faq"></i></div>
            <div class="t-text">去售后</div>
          </div>
        </div>
        <div class="item">
          <div>
            <div class="t-icon"><i class="icofont-badge"></i></div>
            <div class="t-text">去求购</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "purchaseInfo",
  data() {
    return {
      num: ''
    }
  },
  created() {
    let token = this.$store.getters.getToken
    axios.get('/api/goods/getPaidNum', {headers: {'token': token}}).then(res => {
      this.num = res.data.PaidNum
    })
  }
}
</script>

<style scoped>
.all {
  font-family: "微軟正黑體 Light", sans-serif;
  padding-bottom: 0.5rem;
  border-bottom: 5px solid #f6f6f6;
}

.bottom {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  padding-bottom: 0.7rem;
  padding-top: 0.7rem;
}

.card {
  margin: 0.5rem 1rem;
  text-align: center;
  border-radius: 5px;
  background-color: #eeeeee;
}

.small_card {
  padding: 20px 20px;
  vertical-align: center;
  display: inline-block;
  width: 50%;
}

.small_card_icon {
  display: inline-block;
}

.small_card_text {
  display: inline-block;
}

.small_card_text p {
  margin: 0 0;
  display: inline-block;
  color: #191919;
  font-weight: bold;
  font-size: 15px;

}

.icofont {
  font-size: 20px;
  margin-right: 10px;
  color: #191919;
}

.t-icon {
  font-size: 25px;
  text-align: center;
  color: #191919;
}

.t-text {
  font-size: 12px;
  color: #191919;
}

.small_num {
  text-align: center;
  line-height: 18px;
  font-size: 10px;
  position: absolute;
  width: 15px;
  height: 15px;
  color: white;
  border-radius: 50%;
  background-color: red;
  margin-top: -5px;
  margin-left: 6px
}
</style>
