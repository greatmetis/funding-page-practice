<template>
    <div class="right-side-column">
        <div class="contact-card">
            <div class="d-flex">
                <div class="image-border">
                    <ImagePenal imageUrl="store_img"/>
                </div>
                <div class="pl-4">
                    <h5>缺錢事務所</h5>
                    <p>已發起 1 個專案</p>
                </div>
            </div>
            <p>需要點錢錢做些酷酷的東西，拜託各位乾爹乾媽囉！</p>
            <div class="d-flex">
                <div class="socials d-flex align-items-center" >
                    <div class="social facebook">
                        <b-icon icon="facebook" variant="light"></b-icon>
                    </div>
                    <b-icon icon="youtube" variant="light" class="social youtube"></b-icon>
                </div>
                <Button>
                    <b-icon icon="chat-text"></b-icon>
                    聯絡我們
                </Button>
            </div>
        </div>
        <div class="plan-options">
            <div class="title">
                <h5>選擇一個方案來支持</h5>
            </div>
            <div class="option-cards" v-for="(plan,index) in plans" :key="index">
                <ImagePenal imageUrl="plan_img"/>
                <div class="option-info">
                    <div class="on-sale d-flex">
                        <span>限時優惠</span>
                        <span>2 days 20:05:20</span>
                    </div>
                    <h5>{{plan.planName}}</h5>
                    <h4>NT$ {{plan.price}}</h4>
                    <div class="tags d-flex">
                        <p class="tag donated-times">已被贊助88次</p>
                        <p class="tag limit">限量<span>200</span>個</p>
                    </div>
                    <p class="description">{{plan.description}}</p>
                    <Button class="btn-yellow">贊助此專案</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImagePenal from '../components/ImagePenal.vue'
import Button from '../components/Button.vue'
export default {
    name:'RightSideColumn',
    components:{
        ImagePenal,
        Button,
    },
    data(){
        return{
            plans:[
                {planName:'買一送一，只有兩百組別錯過',
                price:1600,
                description:'受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。',
                planImage:'plan_img'},
                {planName:'買一送一，只有兩百組別錯過',
                price:1600,
                description:'受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。',
                planImage:'plan_img'},
                {planName:'買一送一，只有兩百組別錯過',
                price:1600,
                description:'受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。',
                planImage:'plan_img'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
$light: #858377;
$dark: #636057;
$primary: #ffdf65;
$bg--light: #f8f9fa;
$text-color--dark-gray: #494846;
$text-color--dark-blue: #373a3c;
$color--gray-light: #e8e8db;

@mixin border($mb:16px,$p:16px){
    border: 1px solid $color--gray-light;
    border-radius: 8px;
    padding:$p;
    margin-bottom: $mb;
}

.right-side-column{
    margin-top: 48px;
    h5{
        color:$text-color--dark-gray;
        letter-spacing: 2px;
        font-weight:700;
        line-height:29px;
        margin-bottom: 0;
    }

    .contact-card{
        @include border(40px);
        color:$text-color--dark-blue;
        .image-border{
            border: 2px solid $primary;
            border-radius: 50%;
            overflow: hidden;
        }
        h5{
            font-weight:400;
        }
        .socials{
            flex:2;
            height:30px;
            .social{
                width:30px;
                // height:30px;
                color:white;
                // background-color: $light;
                border-radius: 50%;
            }
        }
        .btn{
            flex:1;
            font-size:0.75rem;
            border: 1px solid $light;
            line-height:18px;
            width:100px;
            height:30px;
            .b-icon{
                margin-right: 4px;
            }
        }
    }

    .plan-options{
        .title{
            background: $bg--light;
            text-align:center;
            border-radius: 8px;
            padding:6px;
            border-left:$primary solid 4px;
            border-right:$primary solid 4px;
            margin-bottom: 16px;
            h5{
                font-weight:700;
            }
        }
        .option-cards{
            @include border(16px, 0px);
            .option-info{
                padding: 8px 16px 16px;
            }
            .on-sale{
                font-size:0.875rem;
                font-weight:300;
                padding-bottom:8px;
                margin-bottom: 8px;
                border-bottom:1px solid $color--gray-light;
                &>span:last-child{
                    margin-left:auto;
                }
            }
            h5{
                font-size:1.25rem;
                font-weight:700;
            }
            h4{
                font-weight:700;
                line-height:32px;
                
            }
            .tags{
                .tag{
                    padding:2px 16px;
                    font-size:0.75rem;
                    font-weight:700;
                    background-color: $color--gray-light;
                    color:$light;
                    border-radius: 4px;
                    margin-right: 8px;
                    margin-bottom: 10px;
                    &.limit{
                        background-color: $dark;
                        color:white;
                        span{
                            color:$primary;
                        }
                    }
                }
                
            }
            .description{
                letter-spacing: 0.7px;
                line-height:24px;
                text-align:justify;
            }
            .btn{
                letter-spacing: 1.1px;
                font-weight:700;
                line-height:21px;
                padding:10px;
            }
        }
    }
}
</style>