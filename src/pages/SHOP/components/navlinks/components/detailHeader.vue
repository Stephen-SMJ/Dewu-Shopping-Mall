<template>
    <div class="container">
        <div class="header">
            <div @click="goback" class="goback">返回</div>
            <div class="service">客服</div>
            <div class="pur">求购</div>
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detailHeader",
        methods:{
            goback() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .container{
        width: 100%;
        text-align: center;
    }

    .header div{
        display: inline-block;
    }
    .goback{
        float: left;
        margin-left: 10px;
        margin-top: 10px;
        font-weight: bolder;
    }
    .service{
        float: right;
        margin-right: 14px;
        margin-top: 10px;
        font-weight: bolder;
    }
    .pur{
        float: right;
        margin-right: 10px;
        margin-top: 10px;
        font-weight: bolder;
    }
</style>