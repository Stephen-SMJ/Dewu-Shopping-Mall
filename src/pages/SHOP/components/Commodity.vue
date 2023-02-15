<template>
    <div class="container">
        <div class="productRow">
            <router-link class="productBox" v-for="(item,index) in imageList" :key="index" :to="{path:'detail', query: {id:index}}" tag="div" name="detail">
                <div class="content">
                    <img :src="item.src" alt="product" class="img">
                    <div class="name">{{item.name}}</div>
                    <div class="payInfo">
                        <div class="money">¥ {{item.money}}</div>
                        <div class="payment">{{item.payment}}人付款</div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Commodity",
        props:["imageList"]
    }
</script>

<style scoped>
    .container{
        width: 100%;
        height: 1700px;
    }
    .productRow{
        width: 100%;
    }
    .productBox{
        width: 50%;
        display: inline-block;
        border: whitesmoke solid 1px;
    }
    .content{
        width: 80%;
        margin: 10px 20px;
        text-align: left;
    }
    img{
        width: 100%;
    }
    .name{
        font-size: 13px;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient:vertical;
    }
    .money{
        font-weight: bolder;
        font-size: 13px;
        margin-right: 17px;
        display: inline-block;
    }
    .payment{
        font-size: 12px;
        margin-left: 17px;
        display: inline-block;
    }
</style>