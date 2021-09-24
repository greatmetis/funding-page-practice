<template>
    <div class="selection-bar">
        <div class="container selections">
            <router-link class="selection" to="/">專案介紹</router-link>
            <router-link class="selection" to="/faq">常見問答</router-link>
            <router-link class="selection" to="/progress">目前進度</router-link>
            <router-link class="selection" to="/comments">留言</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'SelectionBar',

}
</script>

<style lang="scss" scoped >
$light: #858377;
$dark: #636057;
$primary: #ffdf65;
$warning: #ff7851;
$bg--light: #f8f9fa;
$color--gray-light: #e8e8db;

.selection-bar{
    // border: 1px solid #000;
    border-bottom: $color--gray-light solid 1px;
    padding:24px 0;
    .selections{
        .selection{
            margin-right: 40px;
            padding:24px 12px;
            color:$dark;
            
            &:hover,&.router-link-exact-active{
                text-decoration: none;
                font-weight:700;
            }
            .router-link-exact-active{
                &::after{
                    content:'';
                    display: block;
                    position: absolute;
                    left:0;
                    top:0;
                    height:2px;
                    width:100%;
                    background-color: $primary;
                }
            }
        }
    }
}

</style>