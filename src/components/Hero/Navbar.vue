<template>
    <div class="navbar">
        <div class="container">
            <div class="left">
                <a class="logo">
                    <img src="@/assets/logo.jpg" alt="拼拼">
                </a>
                <ul class="nav">
                    <li class="nav-item"><a class="nav-link text-dark" href="">關於</a></li>
                    <li class="nav-item"><a class="nav-link text-dark" href="">挖寶</a></li>
                    <li class="nav-item"><a class="nav-link text-dark" href="">我有個大膽的想法</a></li>
                </ul>
            </div>
            <div class="right">
                <Button class="btn-yellow" @btnClick="triggerLoginForm">登入</Button>
                <Button>註冊</Button>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../Button.vue'
export default {
    name:'navbar',
    components:{
        Button,
    },
    methods:{
        triggerLoginForm(){
            this.$emit('triggerLoginForm')
        }
    }
}
</script>

<style lang='scss' scoped>
$light: #858377;
$dark: #636057;
$primary: #ffdf65;
$bg--light: #f8f9fa;

.navbar{
    display: flex;
    margin:auto;
    padding:24px 0 16px 0;
    background-color: $bg--light;
    border-bottom: 5px solid $primary;
    .left, .right{
        display: flex;
        align-items: center;
    }
    .left{
        .logo{
            height:40px;
            img{
                height:100%;
            }
        }
        .nav{
            margin-left: 32px;
            gap:16px;
        }
    }
    .right{
        a:nth-child(2){
            margin-left: 16px;
        }
    }
    
}
</style>