<template>
    <div class="container">
        <ShopHeader></ShopHeader>
        <navbar></navbar>
        <swipper :swiperList="swiperList"></swipper>
        <icon :iconList="iconList"></icon>
        <middle></middle>
        <commodity :imageList="imageList"></commodity>
    </div>
</template>

<script>
    import ShopHeader from "./components/ShopHeader";
    import navbar from './components/NavBar.vue';
    import swipper from "./components/swipper";
    import icon from "./components/Icon";
    import Middle from "./components/Middle";
    import Commodity from "./components/Commodity";
    import axios from 'axios'
    export default {
        name: "Shop",
        components:{
            ShopHeader,
            navbar,
            swipper,
            icon,
            Middle,
            Commodity
        },
        data(){
            return{
                swiperList:[],
                iconList:[],
                imageList:[]
            }
        },
        methods:{
            getHomeData(){
                axios.get('./api/goods/getGoods').then(this.getHomeDataSucc);
            },
            getHomeDataSucc(res){
                res = res.data;
                if (res.flag && res.data){
                    var data = res.data;
                    this.swiperList = data.swiperList;
                    this.iconList = data.iconList;
                    this.imageList = data.imageList;
                    // console.log(this.iconList);
                }
            }
        },
        mounted(){
            this.getHomeData()
        }
    }
</script>

<style scoped>

</style>
