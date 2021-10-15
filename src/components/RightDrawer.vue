<template>
    <div class="drawer" id="right-drawer" v-if="isDrawerOpen">
        <b-icon class="btn-close" @click="closeDrawer" icon="x"></b-icon>
        <div class="top">
            <ul class="nav">
                <li class="nav-item"><a class="nav-link" href="">關於</a></li>
                <li class="nav-item"><a class="nav-link" href="">挖寶</a></li>
                <li class="nav-item"><a class="nav-link" href="">我有個大膽的想法</a></li>
            </ul>
        </div>
        <div class="bottom">
            <Button class="btn-yellow" @btnClick="triggerLoginForm">登入</Button>
            <Button>註冊</Button>
        </div>
    </div>
</template>

<script>
import Button from '../components/Button.vue'

export default {
    name:'RightDrawer',
    props:['isDrawerOpen'],
    components:{
        Button,
    },
    methods:{
        triggerLoginForm(){
            this.$emit('triggerLoginForm')
        },
        closeDrawer(){
            this.$emit('closeDrawer')
        }
    }
}
</script>

<style lang="scss" scoped>
$light: #858377;
$dark: #636057;
$primary: #ffdf65;
$warning: #ff7851;
$bg--light: #f8f9fa;

.drawer{
    background-color: #fff;
    box-shadow:0 4px 10px 5px rgba(black,0.2);
    height:100vh;
    width:80vw;
    position: fixed;
    right:0;
    top:0;
    z-index:50;
    padding:40px;
    display: flex;
    flex-direction:column;

    .top,.bottom{
        display: flex;
        flex-direction:column;
        align-items: center;
    }
    .top{
        margin:0;
        margin-bottom: 80px;
        align-items: center;
        .nav{
            align-items: center;
            flex-direction:column;
            gap:24px;

            .nav-link{
                color:$dark;
                font-size:24px;
                &:hover{
                    color:$warning;
                    
                }
            }
        }
    }
    .bottom{
        .btn{
            margin: 16px 0;
            width:80%;
            max-width:300px;
        }
    }
    .btn-close{
        width:30px;
        height:30px;
        opacity: 0.5;
        cursor: pointer;
        transition:all 0.2s;
        &:hover{
            opacity: 1;
            color:$warning
        }
    }
}
</style>