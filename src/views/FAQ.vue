<template>
    <div class="faq" role="tablist">
            <b-card no-body class="mb-2" 
            v-for="(question,index) in questions" :key="index" role="tab">
                <div class="question py-3" v-b-toggle="'answer-' + question.id">
                    <div class=" px-4 d-flex align-items-center">
                        <span>Q{{question.id}}</span>
                        <h6>{{question.question}}</h6>
                        <b-icon class="ml-auto open-up" :rotate="question.isCollapsed ? '0':'180'" icon="chevron-down"></b-icon>
                    </div>
                </div>
                <b-collapse class="answer" :id="'answer-'+question.id" accordion ="my-answer" role="tabpanel">
                    <hr>
                    <p class="text">{{question.answer}}</p>
                </b-collapse>
            </b-card>
    </div>

</template>

<script>
export default {
    name:'FAQ',
    data(){
        return{
            questions:[
                {id:1,
                question:'影片拍完之後可以編輯嗎？',
                answer:'可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！',
                isCollapsed:true,},
                {id:2,
                question:'有提供保固或維修服務嗎？',
                answer:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat possimus architecto commodi ratione esse est laudantium assumenda consequuntur, asperiores voluptate dicta cumque recusandae dolor optio voluptatem, cupiditate exercitationem maiores dolores, distinctio rem labore. Sint dolorum itaque dicta veniam? A, voluptatum!',
                isCollapsed:true,},
                {id:3,
                question:'補充包底片要去哪裡購買呢？',
                answer:'Lorem ipsionem maiores dolores, distinctio rem labore. Sint dolorum itaque dicta veniam? A, voluptatum!',
                isCollapsed:true,},
                {id:4,
                question:'印出來的拍立得照片需要充電嗎？',
                answer:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat possimus architecto cctio rem labore. Sint dolorum itaque dicta veniam? A, voluptatum!',
                isCollapsed:true,},
                {id:5,
                question:'運送方式及付款方式有哪些呢？',
                answer:'Lorem ipsum dniam? A, voluptatum!',
                isCollapsed:true,},
                {id:6,
                question:'退換貨方式及規則',
                answer:'distinctio rem labore. Sint dolorum itaque dicta veniam? A, voluptatum!',
                isCollapsed:true,},
                ]
        }
    },
    methods:{
        notCollapsed(){
        let card = document.getElementsByClassName('card')
        console.log(card.length)
        card.classList.add('card-box-shadow')
        },
        checkCollapsed(){
            this.questions.forEach((q)=>{
                if(q.isCollapsed){
                    return 180
                }
            })
            return 0
        },
    },
    mounted(){
        this.$root.$on("bv::collapse::state",(collapseId,isJustShown)=>{
            let currentIndex = collapseId.split("-").pop()-1
            if(isJustShown){
                this.questions[currentIndex].isCollapsed=false
                return
            }
            this.questions[currentIndex].isCollapsed=true
            // console.log('Id:', collapseId)
            // console.log('isJustShown', isJustShown)
            
        });

    },

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

.faq{
    font-size:0.875rem;
    margin-top: 48px;
    .card{
        border-radius: 8px;
    }
    h6{
        margin-bottom: 0;
        font-size:0.875rem;
    }
    .question{
        span{
            width:28px;
            height:28px;
            border-radius: 4px;
            background-color: $primary;
            color:$dark;
            font-weight:700;
            line-height:28px;
            text-align:center;
            margin-right:18px;
        }
    }
    .answer{
        hr{
            margin-top:0;
        }
        .text{
            margin: 0;
            padding-bottom: 16px;
            padding-right:16px;
            padding-left: 64px;
            letter-spacing: 0.7px;
            line-height:27px
        }
    }
    .answer.collapse.show{
        box-shadow: 0px 5px 10px 2px rgba($dark,0.1);
        
    }
    
}

.card-box-shadow{
    box-shadow:0 0 8px 0 rgba(#494846,15%)
}

@media (max-width:992px){
  .faq{
    margin-top: 32px;

    .answer{
        hr{
            margin:12px 0;
        }
        .text{
            padding: 0 16px 16px;
            
        }
    }
  }
}
</style>