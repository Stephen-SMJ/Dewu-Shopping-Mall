<template>
    <div class="container">
        <div v-for="(item,index) in comList" :key="index">
            <p>{{item.name}}</p>
            <div class="money">￥{{item.money}}</div>
        </div>
        <div class="additional-info border-line">
            <div class="wrap">
                <div class="type">分期</div>
                <div class="content">
                    <span class="detail">满1元即可加钱换购</span>
                </div>
            </div>
            <div class="wrap">
                <div class="type">促销</div>
                <div class="content">
                    <span class="detail">该商品最多可享12期分期购买福利</span>
                </div>
            </div>
            <div class="wrap">
                <div class="type">运费</div>
                <div class="content">
                    <span class="detail">本商品满299元或2件包邮</span>
                </div>
            </div>
            <div class="wrap">
                <div class="type">说明</div>
                <div class="content">
              <span class="detail detail-hook">
                <img src="../../../../../assets/icon/hook.png" alt="">税费说明
              </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detailIntro",
        props:['comList']
    }
</script>

<style scoped>
    p{
        margin: 20px 30px;
        font-size: 18px;
        color: black;
    }

    .money{
        margin: 10px auto;
        font-weight: bolder;
        font-size: 22px;
    }

    .additional-info{
        text-align: left;
        padding:10px 10px;
        border-bottom: whitesmoke 4px solid;
        border-top:whitesmoke 4px solid;
        height: 180px;
    }

    .wrap {
        height: 36px;
        font-size:15px;
        margin-top: 5px;
        border-bottom: whitesmoke solid;
        vertical-align:middle;
    }

    .type {
        display:inline-block;
        color:#969896;
        padding-left:8px;
    }

    .content {
        display:inline-block;
        padding-left: 10px;
    }

   .detail-hook img{
        vertical-align:middle;
        width:10%;
    }

    .arrow-icon-right img{
        width: 10%;
    }


</style>