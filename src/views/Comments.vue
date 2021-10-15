<template>
    <div class="comments" id="comments">
        <div v-if="!isScreenSmall" class="comment-info">
            <p>只有本專案的贊助者才可以留言哦，如果有任何專案相關的問題，歡迎<a href="#">聯絡提案人！</a></p>
        </div>
        <b-card v-for="comment in commentSet" :key="comment.id" class="mb-3">
            <div class="top">
                <div class="d-flex align-items-center mb-3">
                    <ImagePenal class="user-image" :imageUrl="comment.imgurl"/>
                    <div class="d-flex-column">
                        <h5 class="user-name">{{comment.name}}</h5>
                        <p class="comment-date">{{comment.date}}</p>
                    </div>
                </div>
                <p class="comment-content">{{comment.content}}</p>
            </div>
            <div v-if="comment.isReplied" class="bottom">
                <h6>提案者回覆</h6>
                <p>{{comment.reply}}</p>
            </div>
            
        </b-card>
    </div>
</template>

<script>
import ImagePenal from '../components/ImagePenal.vue'

export default {
    name:'Comments',
    components:{
        ImagePenal,
    },
    props:{
        isScreenSmall:Boolean,
    },
    data(){
        return{
            smallScreen:true,
            commentSet:[
                {
                id:1,
                name:'廖小杰',
                imgurl:'user_img01',
                date:'2020年5月22日 11:32',
                content:'晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！',
                isReplied:true,
                reply:'你要嘛起床的時候開燈，要嘛給我們更多錢開發阿'
                },
                {
                id:2,
                name:'卡阿伯',
                imgurl:'user_img02',
                date:'2020年5月22日 11:32',
                content:'希望有更多花色可以選擇！我女兒最近喜歡綠色',
                isReplied:null,
                reply:''
                },
                {
                id:3,
                name:'賈師',
                imgurl:'user_img02',
                date:'2020年5月22日 11:32',
                content:'可以做個相簿功能嗎？拍出好看的影片再讓我們選擇要印出哪一張這樣',
                isReplied:null,
                reply:''
                },
                {
                id:4,
                name:'俊俊',
                imgurl:'user_img02',
                date:'2020年5月22日 11:32',
                content:'test123 看一下我是不是真的可以留言',
                isReplied:null,
                reply:''
                }]
        }
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

.comments{
    h5,h6,p{
        margin-bottom: 0;
    }
    .comment-info{
        border-left: 3px solid $primary;
        margin-top: 48px;
        p{
            padding: 16px;
            text-align:left;
            letter-spacing: 0.7px;
            line-height:20px;
            font-size:0.875rem;
        }
        a{
            color:$warning;
            cursor: pointer;
        }
    }

    // Comment Cards
    .card{
        margin-top: 32px;
    }
    .top{
        .user-image{
            width:60px;
            height:60px;
            margin-right: 16px;
        }
        .user-name{
            letter-spacing: 2px;
            line-height:29px;
            color:$text-color--dark-gray;
        }
        .comment-date{
            color:$light;
            letter-spacing: 2px;
            line-height:20px;
            font-size:0.875rem;
        }
        .comment-content{
            letter-spacing: 0.7px;
            line-height:24px;
            color:$text-color--dark-blue;
        }
    }
    .bottom{
        margin-top: 16px;
        padding:16px;
        background-color: $bg--light;
        h6{
            font-size:0.875rem;
            letter-spacing:0.61px;
            line-height:20px;
            color:$warning;
        }
        p{
            letter-spacing:0.7px;
            line-height:24px;
            color:$text-color--dark-blue;
        }
    }
}


@media(max-screen:576px){
    .comments{
        .top{
            .user-image{
                width:50px;
                height:50px;
            }
        }
    }
}

</style>