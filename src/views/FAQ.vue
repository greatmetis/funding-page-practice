<template>
    <div class="faq">
        <b-card class="container-fluid" v-for="question in questions" :key="question.id">
            <div class="header">
                <div class="question">
                    <span>Q{{question.id}}</span>
                    <h6>{{question.question}}</h6>
                </div>
                <b-icon icon="arrow-down"></b-icon>
            </div>
            <b-collapse class="answer">
                <p>{{question.answer}}</p>
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
                answer:'可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！'},
                {id:2,
                question:'有提供保固或維修服務嗎？',
                answer:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat possimus architecto commodi ratione esse est laudantium assumenda consequuntur, asperiores voluptate dicta cumque recusandae dolor optio voluptatem, cupiditate exercitationem maiores dolores, distinctio rem labore. Sint dolorum itaque dicta veniam? A, voluptatum!'},
                {id:3,
                question:'補充包底片要去哪裡購買呢？',
                answer:'Lorem ipsionem maiores dolores, distinctio rem labore. Sint dolorum itaque dicta veniam? A, voluptatum!'},
                {id:4,
                question:'印出來的拍立得照片需要充電嗎？',
                answer:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat possimus architecto cctio rem labore. Sint dolorum itaque dicta veniam? A, voluptatum!'},
                {id:5,
                question:'運送方式及付款方式有哪些呢？',
                answer:'Lorem ipsum dniam? A, voluptatum!'},
                {id:6,
                question:'退換貨方式及規則',
                answer:'distinctio rem labore. Sint dolorum itaque dicta veniam? A, voluptatum!'},]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>