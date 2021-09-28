<template>
    <a type="button" class="btn" @click="btnClick">
        <slot>Button</slot>
    </a>

    
</template>

<script>
export default {
    name:'Button',
    methods:{
        btnClick(){
            this.$emit('btnClick')
        }
    }
}
</script>

<style lang="scss" scoped>
$dark: #636057;
$primary: #ffdf65;
$warning: #ff7851;

@mixin button ($bd-color:$dark, $bg-color:transparent,$h:38px,$w:96px){
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid $bd-color;
    min-width:$w;
    width:100%;
    min-height:$h;
    height:100%;
    padding:0px;
    border-radius: calc($h / 2);
    background-color:$bg-color;
    transition: all 0.2s ease;
}
.btn{
    @include button;
    &:hover{
        background-color: $primary;
        border: none;
        svg{
            color:$warning;
        }
    }
    a{
        color:$dark;
        font-size:16px;
    }
    &.btn-yellow{
    background-color: $primary;
    border: none;
        &:hover{
            background-color: $warning;
            color:white;
            border: none;
        }
    }
    &.btn-lg{
        height:52px;
        border-radius: 26px;
        font-size:20px;
    }
}




</style>