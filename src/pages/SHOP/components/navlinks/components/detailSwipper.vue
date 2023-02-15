<template>
    <div class="container">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in comList" :key="index" class="imgContainer">
                <img :src="item.src" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: "detailSwipper",
        props:['comList']
    }
</script>

<style scoped>
    .container{
        width: 100%;
    }
    .imgContainer{
        height: 250px;
        margin: 20px 18px;
    }
    .mint-swipe{
        width:90%;
        color:#fff;
        text-align: center;
        margin: 40px auto;
        height: 200px;
    }
    .mint-swipe-items-wrap{}
    .mint-swipe-item{
        text-align: center;
        margin: 0 auto;
    }
    img{
        width:100%;
    }
</style>