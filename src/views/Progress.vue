<template>
    <div class="current-progress">
        <b-card no-body v-for="event in events" :key="event.id" class="mb-3">
            <b-row no-gutters>
                <b-col xs="4"  class="left">
                    <ImagePanel :imageUrl="event.img"/>
                </b-col>
                <b-col xs="8" class="right p-3">
                    <h6 class="title">{{event.title}}</h6>
                    <p class="date">{{event.date}}</p>
                    <p v-if="!isScreenSmall" class="centent">{{event.content}}</p>
                    <a href="#">more</a>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
import ImagePanel from '../components/ImagePenal.vue'

export default {
    name:'CureentProgress',
    components:{
        ImagePanel,
    },
    data(){
        return{
            isScreenSmall:null,
            events:[
                {
            id:1,
            img:'news01',
            title:'高雄體驗會｜免費參加送帆布袋',
            date:'2021-6-20',
            content:'大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！',
            },
            {
            id:2,
            img:'news02',
            title:'高雄體驗會｜免費參加送帆布袋',
            date:'2021-6-20',
            content:'大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！'
            },
            {
            id:3,
            img:'news03',
            title:'高雄體驗會｜免費參加送帆布袋',
            date:'2021-6-20',
            content:'大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！'
            }
            ]
        }
    },
    methods:{
        // Mobile detection
        checkScreen(){
            const windowWidth = window.innerWidth
            if(windowWidth <768){
                this.isScreenSmall = true
                return 
            }else{
                return this.isScreenSmall = false
            }
        }
    },
    created(){
        this.checkScreen()
        window.addEventListener('resize',this.checkScreen)
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

.current-progress{
    margin-top: 48px;
    h6{
        color:$text-color--dark-gray;
    }
    p{
        font-size:0.875rem;
        color:$light;
    }

    .left{

    }
    .right{
        .date{
            margin-bottom: 8px;
            letter-spacing: 0.49px;
            line-height:24px;
        }
        .content{
            letter-spacing: 0.7px;
            line-height:20px;
        }

        a{
            border: none;
            background-color: transparent;
            color:$warning;
            text-transform: uppercase;
            letter-spacing: 0.7px;
            line-height:24px;
            font-size:0.875rem;
            font-weight:700;
            cursor: pointer;
            outline:none;
            text-align:left;
        }
    }
}



</style>