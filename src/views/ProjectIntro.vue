<template>
    <div class="project-intro">
        <div v-for="(content,index) in contents" :key="index">
            <ImagePanel :imageUrl="content.url"/>
            <h4 class="title">{{content.title}}</h4>
            <p>{{content.article}}</p>
        </div>
    </div>
</template>

<script>
import ImagePanel from '../components/ImagePenal.vue'

export default {
    name:'ProjectIntro',
    components:{
        ImagePanel,
    },
    data(){
        return{
            contents:[{
                url:'p1',
                title:'施了魔法的照片',
                article:'受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。'
            },
            {
                url:'p2',
                title:'留下當下的美好',
                article:'受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。'
            }]
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
$color--gray-light: #e8e8db;

.project-intro{
    padding-top: 48px;
    .title{
        margin-top: 24px;
        margin-bottom: 4px;
        padding-left:16px;
        border-left:solid $primary 4px;
        line-height:36px;
        letter-spacing:1.9px;
    }
    p{
        line-height:32px;
        margin-bottom: 1.5rem;
    }
}

</style>