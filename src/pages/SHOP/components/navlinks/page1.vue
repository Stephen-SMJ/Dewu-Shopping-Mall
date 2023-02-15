<template>
    <div class="container">
        <ShopHeader></ShopHeader>
        <navbar></navbar>
        <icon :iconList="iconList"></icon>
        <div class="imgContainer" >
            <img src="../../../../assets/images/swiper1.png" alt="">
        </div>

        <commodity :imageList="imageList"></commodity>
    </div>
</template>

<script>
    import ShopHeader from "../ShopHeader";
    import navbar from '../NavBar.vue';
    import icon from "../Icon";
    import Commodity from "../Commodity";
    import axios from 'axios'
    export default {
        name: "page1",
        components:{
            ShopHeader,
            navbar,
            icon,
            Commodity
        },
        data(){
            return{
                iconList:[],
                imageList:[]
            }
        },
        methods:{
            getHomeData(){
                axios.get('/api/goods/getGoods').then(this.getHomeDataSucc);
            },
            getHomeDataSucc(res){
                res = res.data;
                if (res.flag && res.data){
                    var data = res.data;
                    this.iconList = data.iconList;
                    this.imageList = data.imageList;
                    console.log(this.iconList);
                }
            }
        },
        mounted(){
            this.getHomeData()
        }
    }
</script>

<style scoped>
    .imgContainer{
        margin: 0 18px;

    }
    img{
        width:100%;
        height:100%;
        border-radius: 10px;
    }
</style>
