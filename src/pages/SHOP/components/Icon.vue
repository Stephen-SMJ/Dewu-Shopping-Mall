<template>
    <div class="mui-content">
        <mt-swipe :auto="4000" :showIndicators="false">
            <mt-swipe-item v-for="(page,index) of pages" :key="index">
                <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li v-for="item in page" :key="item.id" class="mui-table-view-cell mui-media mui-col-xs-4">
                        <router-link to="/snapUp" tag="li">
                            <img :src="item.src" class="icon-img">
                            <div class="mui-media-body">{{item.content}}</div>
                        </router-link>
                    </li>
                </ul>
            </mt-swipe-item>
        </mt-swipe>
    </div>

</template>

<script>
    export default {
        name: "Icon",
        props:["iconList"],
        computed: {
            pages() {
                var pages=[];
                this.iconList.forEach((item,index) => {
                    var page = parseInt(index/10);
                    if (!pages[page]){
                        pages[page]=[];
                    }
                    pages[page].push(item)
                });
                return pages
            }
        }
    }
</script>

<style scoped>
    .mint-swipe{height:145px;color:white;}
    .mint-swipe-items-wrap{}
    .mint-swipe-item{
        text-align: center;
        background-color: white;
    }

    .mint-swipe  img{
        width:85%;
        height:85%;
    }
    .mui-grid-9{
        background-color: white;
        border:none !important;
    }
    .mui-content .mui-grid-view.mui-grid-9 .mui-col-xs-4{
        width:20%
    }
    .mui-media-body{
        font-size:10px !important;
        transform: scale(0.9);
    }
    .mui-table-view-cell{
        padding: 3px 5px !important;
        background-color: white !important;
        border: none !important;
    }
</style>