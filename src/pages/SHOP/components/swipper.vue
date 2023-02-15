<template>
    <div class="container">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swiperList" :key="item.id">
                <img :src="item.src">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: "swipper",
        props:['swiperList']
    }
</script>

<style scoped>
    .container{
        margin: 0 18px;
    }
    .mint-swipe{height:110px;color:#fff;border-radius: 10px;}
    .mint-swipe-items-wrap{}
    .mint-swipe-item{
        text-align: center;
    }
    .mint-swipe  img{
        width:100%;
        height:100%;
    }
</style>