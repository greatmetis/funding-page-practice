<template>
    <div class="login d-flex justify-content-center align-items-center">
        <div class="login-card">
            <div class="header d-flex align-items-center">
                <h4 class="title mr-auto">登入</h4>
                <b-icon class="btn-close" @click="closeLoginForm" icon="x"></b-icon>
            </div>
            <b-form class="login-form" @submit.prevent="">
                <b-form-group id="input-group-login-account" label="帳號" label-for="login-account">
                    <b-form-input required type="text" id="login-account" v-model="account"></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-login-password" label="密碼" label-for="login-password">
                    <b-form-input required type="text" id="login-password" v-model="password"></b-form-input>
                </b-form-group>
                <p class="forget-password">忘記密碼？</p>
                <Button class="btn-yellow">登入</Button>
                <div class="lead-to-register">
                    <p>還沒有帳號？<router-link to="">註冊一個帳號</router-link> </p>
                </div>
            </b-form>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
    name:'Login',
    components:{
        Button, 
    },
    data(){
        return{
            account:'',
            password:'',
        }
    },
    methods:{
        closeLoginForm(){
            this.$emit('closeLoginForm')
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
$text-color--dark-gray: #494846;
$text-color--dark-blue: #373a3c;
$color--gray-light: #e8e8db;

$body-color: $dark;

p{
    font-size:0.75rem;
}
h4{
    margin-bottom: 0;
}

.login{
    position: fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background-color: rgba(black,0.6);
    z-index:100;
    overflow: hidden;
    .header{
        padding: 16px;
        border-bottom: 1px solid $color--gray-light;
        color:$text-color--dark-blue;
        .title{
            font-weight:700;
        }
        .btn-close{
            font-size:27px;
            line-height:27px;
            opacity: 0.2;
            cursor: pointer;
            &:hover{
                opacity: 1;
            }
        }
    }
    .login-card{
        width:500px;
        border-radius: 8px;
        background-color: #fff;
        .login-form{
        padding: 24px 16px;
            .forget-password{
                color:$light;
                cursor: pointer;
                &::after{
                    content:'那我也沒辦法了！';
                    color:$warning;
                    margin-left: 4px;
                    opacity: 0;
                    transition:all 0.2s ease-in;
                }
                &:hover{
                    &::after{
                        opacity: 1;
                    }
                }
            }
        }
        .lead-to-register{
            display: flex;
            justify-content: center;
            align-self: center;
            text-align:center;
            margin-top: 48px;
            position: relative;
            z-index:10;
            p{
                padding:0 16px;
                background-color: #fff;
                margin-bottom: 0px;
                line-height:20px;
            }
            a{
                color:$warning;
            }
            &::after{
                content:'';
                height:1px;
                width:100%;
                background-color: $color--gray-light;
                position: absolute;
                bottom:50%;
                left:0;
                transform:translateY(-50%);
                z-index:-1;
            }
        }
        .btn{
            padding:12px 0;
            font-weight:700;
        }
    }
}

</style>