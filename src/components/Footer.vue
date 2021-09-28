<template>
    <div class="footer">
        <p>Copyright &copy;{{year}} 拼拼 All rights reserved.</p>
    </div>
</template>

<script>
export default {
    name:'Footer',
    computed:{
        year(){
            let today = new Date()
            return today.getFullYear()
        }
    }
}
</script>

<style lang="scss" scoped>
$text-color--dark-gray: #494846;
.footer{
    padding:32px;
    text-align:center;
    background-color: $text-color--dark-gray;
    color:white;
    p{
        letter-spacing: 0.2px;
        line-height:24px;
        margin-bottom: 0px;
    }
}
@media(max-width:992px){
    .footer{
        padding: 16px;
        p{
            font-size:0.85rem;
        }
    }
}

</style>