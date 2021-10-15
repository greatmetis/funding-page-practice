<template>
    <div class="header">
        <div class="container">
            <a class="logo">
                <img src="@/assets/logo.jpg" alt="拼拼">
            </a>
            <a v-if="isScreenSmall" href="#right-drawer" class="ml-auto nav-btn" @click="toggleDrawer">
                <b-icon icon="list" class="h2 mb-0" variant="light"></b-icon>
            </a>
            <div class="navbar" v-if="!isScreenSmall">
                <div class="left">
                    <ul class="nav">
                        <li class="nav-item"><a class="nav-link text-dark" href="#">關於</a></li>
                        <li class="nav-item"><a class="nav-link text-dark" href="#">挖寶</a></li>
                        <li class="nav-item"><a class="nav-link text-dark" href="#">我有個大膽的想法</a></li>
                    </ul>
                </div>
                <div class="right">
                    <Button class="btn-yellow" @btnClick="triggerLoginForm">登入</Button>
                    <Button>註冊</Button>
                </div>
            </div>
            <RightDrawer v-if="isScreenSmall" 
            :isDrawerOpen="isDrawerOpen" 
            @triggerLoginForm="triggerLoginForm"
            @closeDrawer="toggleDrawer"/>
        </div>
    </div>
</template>

<script>
import Button from '../Button.vue'
import RightDrawer from '../RightDrawer.vue'
export default {
    name:'Header',
    components:{
        Button,
        RightDrawer,
    },
    props:{
        isScreenSmall: Boolean,
        isDrawerOpen:Boolean,
    },
    methods:{
        triggerLoginForm(){
            this.$emit('triggerLoginForm')
        },
        toggleDrawer(){
            this.$emit('toggleDrawer')
        },
    },
    data(){
        return{
            
        }
    }
}
</script>

<style lang='scss' scoped>
$light: #858377;
$dark: #636057;
$primary: #ffdf65;
$warning: #ff7851;
$bg--light: #f8f9fa;

.header{
    padding:24px 0 16px 0;
    background-color: white;
    border-bottom: 5px solid $primary;
    .container{
        display: flex;
        width:100%;
        .logo{
            height:40px;
        img{
            height:100%;
        }
    }
    }
    .navbar{
        display: flex;
        flex:80%;
        .left, .right{
            display: flex;
        }
        .left{
            margin-left: 32px;
            margin-right: auto;
            .nav{
            gap:16px;
            }
        }
        .right{
            button:nth-child(1){
            margin-right: 16px;
            }
        }
    }

    .nav-btn{
        width:32px;
        height:32px;
    }
    
}

</style>