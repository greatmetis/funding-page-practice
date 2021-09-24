<template>
    <div class="selection-bar">
        <div class="container selections d-flex">
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
    border-bottom: $color--gray-light solid 1px;
    .selections{
        .selection{
            margin-right: 16px;
            padding:24px 12px;
            color:$dark;
            display: inline-block;
            position: relative;
            &:hover,&.router-link-exact-active{
                text-decoration: none;
                font-weight:700;
            }
            &.router-link-exact-active{
                &::after{
                    content:'';
                    display: block;
                    position: absolute;
                    left:50%;
                    bottom:0;
                    height:2px;
                    width:100%;
                    background-color: $primary;
                    animation: selection 0.2s linear forwards; 
                }
            }
        }
    }
}

@keyframes selection{
    0%{
        width:0;
        left:50%;
    }
    100%{
        width:100%;
        left:0;
    }
}

@media(max-width:425px){
    .selection-bar{
        .selections{
            justify-content: space-between;
            .selection{
                margin-right: 0px;
                font-size:0.875rem;
                letter-spacing: 1.5px;
                line-height:20px;
                &:first-child{
                    margin-left:-15px;
                }
                &:last-child{
                    margin-right:-15px;
                }
            }
        }
    }
}

</style>