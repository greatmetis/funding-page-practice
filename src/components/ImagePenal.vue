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
    
    img{
        width:100%;
        background-color: transparent;
    }
}
</style>