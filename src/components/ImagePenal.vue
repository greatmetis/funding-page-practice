<template>
    <div class="image">
        <img :src="require(`../assets/${imageUrl}.jpg`)" alt="image" />
    </div>
</template>

<script>
export default {
    name:'ImagePanel',
    props:{
        imageUrl:String,
    },
}
</script>

<style lang="scss" scoped>
.image{
    width:100%;
    height:auto;
    img{
        width:100%;
        background-color: transparent;
    }
    &.img-rounded{
        img{
            border-radius: 32px;
        }
    }
}
</style>