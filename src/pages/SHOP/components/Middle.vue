<template>
    <div class="container">
        <router-link to="" >
            <img src="../../../assets/images/center1.png" alt="" class="img1">
        </router-link>
        <router-link to="" >
            <img src="../../../assets/images/center2.png" alt="" class="img2">
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Middle"
    }
</script>

<style scoped>
    .container{
        margin:0 15px;
    }
img{
    width: 100%;
    overflow: hidden;
    text-align: center;
}
    .img2{
        margin-top: -2px;
    }
</style>