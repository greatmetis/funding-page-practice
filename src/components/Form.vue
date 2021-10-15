<template>
    <div class="form" id="donate-form">
        <div class="form-image">
            <img src="../assets/icon_heart.svg" alt="">
            <h4>贊助專案</h4>
        </div>
        <b-form @submit="submitForm">
            <div class="form-input-group">
                <label for="donate-plan">贊助方案</label>
                <b-form-select class="input-select" id="donate-plan" aria-label="selected plan" v-model="selectedPlan" :state="validPlan">
                    <option v-for="planOption in planOptions" :key="planOption.value" :value="planOption.value">{{planOption.text}}</option>
                </b-form-select>
            </div>
            <div class="form-input-group">
                <label for="donate-reciever">收件人姓名</label>
                <b-form-input class="input-text" type="text" id="donate-reciever" v-model="reciever" :state="validName"></b-form-input>
                <p class="invalid-notification" id="invalid-donate-reciever" v-if="errors.invalidReciever">請輸入收件人姓名</p>
            </div>
            <div class="form-input-group">
                <label for="donate-tel">聯絡電話</label>
                <b-form-input class="input-text" type="tel" id="donate-tel" v-model="contactNumber" :state="validContactNumber"></b-form-input>
                <p class="invalid-notification" id="invalid-donate-tel" v-if="errors.invalidTel">請輸入聯絡電話</p>
            </div>
            <div class="form-input-group">
                <label for="donate-email">連絡信箱</label>
                <b-form-input class="input-text" type="email" id="donate-email" v-model="email" :state="validEmail"></b-form-input>
                <p class="invalid-notification" id="invalid-donate-email" v-if="errors.invalidEmail">請輸入聯絡信箱</p>
            </div>
            <div class="form-input-group">
                <label for="donate-payment">付款方式</label>
                <select class="input-select" id="donate-payment" aria-label="selected payment" >
                    <option v-for="paymentOption in paymentOptions" :key="paymentOption.value" :value="paymentOption.value">{{paymentOption.text}}</option>
                </select>
            </div>
            <!-- <b-form-group id="input-group-plan" label="贊助方案" label-for="input-plan">
                <b-form-select
                    v-model="selectedPlan"
                    :options="planOptions"
                    id="input-plan"
                    value-field="value"
                    text-field="text">
                </b-form-select>
            </b-form-group>
            <b-form-group id="input-group-reciever" label="收件人姓名" label-for="input-reciever"> 
                <input id="input-reciever" v-model="reciever" />
            </b-form-group>
            <b-form-group id="input-group-contactNumber" label="聯絡電話" label-for="input-contactNumber"> 
                <b-form-input :state="validContactNumber" type="tel" id="input-contactNumber" v-model="contactNumber"></b-form-input>
                <b-form-invalid-feedback :state="validContactNumber" >請輸入聯絡電話</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group id="input-group-email" label="聯絡信箱" lebel-for="input-email"> 
                <b-form-input  type="email" id="input-email" v-model="email"></b-form-input>
                <b-form-invalid-feedback :state="validEmail">請輸入聯絡信箱</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group id="input-group-payment" label="付款方式" label-for="input-payment">
                <b-form-select
                    v-model="selectedPaymentOptions"
                    :options="paymentOptions"
                    value-field="value"
                    text-field="text">
                </b-form-select>
            </b-form-group>  -->
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
            errors:{
                invalidPlan:null,
                invalidReciever:null,
                invalidTel:null,
                invalidEmail:null,
            },
        }
},
    methods:{
        submitForm(e){
            e.preventDefault()
            let donatePlan = this.selectedPlan
            let donateReciever = this.reciever
            let donateTel = this.contactNumber
            let donateEmail = this.email
            this.checkPlan()
            this.checkReciever()
            this.checkTel()
            this.checkEmail()

            if(donatePlan&&donateReciever&&donateTel&&donateEmail){
                document.querySelector('#donate-plan').classList.remove('error')
                document.querySelector('#donate-reciever').classList.remove('error')
                document.querySelector('#donate-tel').classList.remove('error')
                document.querySelector('#donate-email').classList.remove('error')
                alert('Thanks for your donation! We will contact you shortly. Have a nice day.')
                location.reload();
                return
            }

            
        },
        checkPlan(){
            if(!this.selectedPlan){
                this.errors.invalidPlan = true
                document.querySelector('#donate-plan').classList.add('error')
                return
            }
                this.errors.invalidPlan = false
                document.querySelector('#donate-plan').classList.remove('error')
        },
        checkReciever(){
        if(!this.reciever){
            this.errors.invalidReciever = true
            document.getElementById('donate-reciever').classList.add('error')
            return
        }
            this.errors.invalidReciever = false
            document.getElementById('donate-reciever').classList.remove('error')
        },
        checkTel(){
            if(!this.contactNumber){
                this.errors.invalidTel = true
                document.getElementById('donate-tel').classList.add('error')
                return
            }
                this.errors.invalidTel = false
                document.getElementById('donate-tel').classList.remove('error')
        },
        checkEmail(){
            if(!this.email){
                this.errors.invalidEmail = true
                document.getElementById('donate-email').classList.add('error')
                return
            }
                this.errors.invalidEmail = false
                document.getElementById('donate-email').classList.remove('error')
        }
    },

    computed:{
        validPlan(){
            return this.selectedPlan != null
        },
        validName(){
            return this.reciever.length > 0
        },
        validContactNumber(){
            return this.contactNumber.length > 0
        },
        validEmail(){
            return this.email.length > 5 && this.email.includes("@") == true
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
        margin: 24px auto 0px;
        width:176px;
    }
    .form-input-group{
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
        label{
            color:$text-color--dark-blue;
            line-height:24px;
            font-weight:400;
        }
        .input-select,.input-text{
            width:100%;
            max-height:38px;
            padding:0.375rem 0.75rem;
            background-color: $bg--light;
            border: none;
            border-radius: 4px;
            font-size:0.875rem;
            color:$dark;
            &:focus{
                outline-color:darken($primary,20%);
                outline-style:double ;
            }
            &.error{
                border: 1px solid $warning;
            }
        }
        .input-select{
            appearance: none;
            background-image:url(../assets/icon_sort-solid.svg);
            background-repeat:no-repeat;
            background-size:8px 20px;
            background-position:right 0.75rem bottom 50%;
        }
        .invalid-notification{
            color:$warning;
            margin-top: 4px;
            margin-bottom: 0;
        }
    }
}
@media(max-width:992px){
    .form{
        margin-top: 32px;
        .btn{
            width:100%;
        }
    }
}

</style>