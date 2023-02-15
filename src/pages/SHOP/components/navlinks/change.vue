<template>
    <div class="container">
        <h3 class="title">虚拟换装</h3>
        <video controls="controls" autoplay="autoplay">
            <source src="../../../../assets/video/换装.mp4" type="video/mp4" />
        </video>
    </div>
</template>

<script>
    export default {
        name: "change"
    }
</script>

<style scoped>
.container{
    width: 100%;
}
    video{
        width: 100%;
    }
    .title{
        text-align: center;
        margin: 20px;
    }
</style>