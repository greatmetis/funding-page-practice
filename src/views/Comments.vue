<template>
    <div class="comments">
        <b-card v-for="comment in commentSet" :key="comment.id">
            <div class="top">
                <div class="d-flex align-items-center">
                    <!-- <div class="user-image"></div> -->
                    <ImagePenal class="user-image" imageUrl="user_img02"/>
                    <div class="d-flex-column">
                        <div class="user-name">{{comment.name}}</div>
                        <div class="comment-date">{{comment.date}}</div>
                    </div>
                </div>
                <p>{{comment.comment}}</p>
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
    data(){
        return{
            commentSet:[
                {
                id:1,
                name:'廖小杰',
                date:'2020年5月22日 11:32',
                comment:'晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！',
                isReplied:true,
                reply:'你要嘛起床的時候開燈，要嘛給我們更多錢開發阿'
                },
                {
                id:2,
                name:'卡阿伯',
                date:'2020年5月22日 11:32',
                comment:'希望有更多花色可以選擇！我女兒最近喜歡綠色',
                isReplied:null,
                reply:''
                },
                {
                id:3,
                name:'賈師',
                date:'2020年5月22日 11:32',
                comment:'可以做個相簿功能嗎？拍出好看的影片再讓我們選擇要印出哪一張這樣',
                isReplied:null,
                reply:''
                },
                {
                id:4,
                name:'俊俊',
                date:'2020年5月22日 11:32',
                comment:'test123 看一下我是不是真的可以留言',
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

.comments{
    .top{
        .user-image{
            width:60px;
            height:60px
        }
    }

}


</style>