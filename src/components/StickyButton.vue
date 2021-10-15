<template>
    <a type="button" class="btn btn-sticky" @click="stickyBtnClick">
        <slot>Sticky Button</slot>
    </a>

</template>

<script>
export default {
    name:'Button',
    methods:{
        stickyBtnClick(){
            this.$emit('stickyBtnClick')
        }
    }
}
</script>

<style lang="scss" scoped>
$dark: #636057;
$primary: #ffdf65;
$warning: #ff7851;

@mixin button ($bg-color:$primary,$h:44px,$w:96px){
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    min-width:$w;
    width:100%;
    height:$h;
    padding:10px;
    background-color:$bg-color;
    transition: all 0.2s ease;
    letter-spazing:1.6px;
    line-height:24px;
    font-weight:700;
}
.btn.btn-sticky{
    @include button;
    position: fixed;
    bottom:-50px;
    left:0;
    box-shadow:0 -2px 4px 0px rgba(black,0.1);
    z-index:50;
    transition:bottom 0.3s ease-in-out;
    &:hover{
        background-color: $warning;
        color:white;
        svg{
            color:$warning;
        }
    }

}
</style>