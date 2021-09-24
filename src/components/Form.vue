<template>
    <div class="form">
        <div class="form-image">
            <img src="../assets/icon_heart.svg" alt="">
            <h4>贊助專案</h4>
        </div>
        <b-form @submit="onSubmit">
            <b-form-group id="input-group-plan" label="贊助方案" label-for="input-plan">
                <b-form-select
                    v-model="selectedPlan"
                    :options="planOptions"
                    value-field="value"
                    text-field="text">
                </b-form-select>
            </b-form-group>
            <b-form-group id="input-group-reciever" label="收件人姓名" lebel-for="input-reciever"> 
                <b-form-input required id="input-reciever" v-model="reciever"></b-form-input>
                <b-form-invalid-feedback :state="validName">請輸入收件人姓名</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group id="input-group-contactNumber" label="聯絡電話" lebel-for="input-contactNumber"> 
                <b-form-input required id="input-contactNumber" v-model="contactNumber"></b-form-input>
                <b-form-invalid-feedback :state="validContactNumber">請輸入聯絡電話</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group id="input-group-email" label="聯絡信箱" lebel-for="input-email"> 
                <b-form-input required id="input-email" v-model="email"></b-form-input>
                <b-form-invalid-feedback :state="validEmail">請輸入聯絡信箱</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group id="input-group-payment" label="付款方式" label-for="input-payment">
                <b-form-select
                    v-model="selectedPaymentOptions"
                    :options="paymentOptions"
                    value-field="value"
                    text-field="text">
                </b-form-select>
            </b-form-group>
            <Button type="submit" class="btn-lg btn-yellow">贊助專案</Button>
        </b-form>
    </div>
</template>

<script>
import Button from '../components/Button.vue'

export default {
    name:'Form',
    components:{
        Button,
    },
    methods:{
        onSubmit(e){
            e.preventDefault()
        },
    },
    data(){
        return{
            planOptions:[
                {value:null, text:'請選擇一個方案',disabled:true},
                {value:'a', text:'佛心捐款'},
                {value:'b', text:'給我驚喜'},
                {value:'c', text:'一系列外拍'}, 
            ],
            paymentOptions:[
                {value:'a', text:'信用卡付款'},
                {value:'b', text:'現金付款'},
                {value:'c', text:'超商付款'},
                {value:'d', text:'不會付付款',disabled:true}, 
            ],
            selectedPlan:null,
            reciever:'',
            contactNumber:'',
            email:'',
            selectedPaymentOptions:'a',
        }
    },
    computed:{
        validName(){
            return this.reciever.length > 0
        },
        validContactNumber(){
            return this.contactNumber.length > 0
        },
        validEmail(){
            return this.email.length >0
        }
    }
}
</script>

<style lang="scss" scoped>
$primary: #ffdf65;
$warning: #ff7851;
.form{
    margin-top: 48px;
    .form-image{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 16px;
        position: relative;
        &::after{
            content:"";
            width:100%;
            display: block;
            height:3px;
            background-color: $primary;
            position: absolute;
            bottom:18px;
            left:0px;
            z-index:-1;
        }
        img{
            margin-bottom: 4px;
        }
        h4{
            padding:0 16px;
            z-index:1;
            background-color: #fff;
            line-height:36px;
            margin-bottom: 0;    
        }
    }
    .btn{
        margin-top: 24px;
    }
}

</style>