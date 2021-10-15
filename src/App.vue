<template>
  <div id="app" @on="checkIsMainSection">
    <Header @triggerLoginForm="triggerLoginForm" :isScreenSmall="isScreenSmall" :isDrawerOpen="isDrawerOpen" @toggleDrawer="toggleDrawer"/>
    <Hero />
    <SelectionBar />
    <div class="container pb-5">
      <b-row>
        <b-col lg="8" class="pr-4">
          <transition name="fade">
          <router-view :isScreenSmall="isScreenSmall"></router-view>
          </transition>
          <a href="#donate-form"><StickyButton v-if="isScreenSmall">贊助專案</StickyButton></a>
          <Form v-if="!isScreenSmall"/>
        </b-col>
        <b-col lg="4" class="pl-4">
          <RightSideColumn/>
        </b-col>
        <b-col cols="12" v-if="isScreenSmall">
          <Form />
        </b-col>
      </b-row>
    </div>
    <Footer />

    <Login v-if="loginFormOpen" @closeLoginForm="closeLoginForm"/>
  </div>
</template>

<script>
import Hero from '@/components/Hero/Hero.vue'
import Header from '@/components/Hero/Header.vue'
import SelectionBar from '@/components/SelectionBar.vue'
import Form from '@/components/Form.vue'
import RightSideColumn from '@/components/RightSideColumn.vue'
import Footer from '@/components/Footer.vue'
import Login from '@/components/Login.vue'
import StickyButton from '@/components/StickyButton.vue'
export default {
  components:{
    Hero,
    Header,
    SelectionBar,
    Form,
    RightSideColumn,
    Footer,
    Login,
    StickyButton
  },
  data(){
    return{
      loginFormOpen:false,
      isScreenSmall:null,
      isDrawerOpen:false,
      hasOverlay:false,
    }
  },
  methods:{
    triggerLoginForm(){
      this.loginFormOpen = true
      this.hasOverlay = true
      this.checkOverlay()
    },
    closeLoginForm(){
      if(this.isScreenSmall){
        this.loginFormOpen = false
        this.hasOverlay = true
        this.checkOverlay()
        return
      }
      this.loginFormOpen = false
      this.hasOverlay = false
      this.checkOverlay()
    },
    toggleDrawer(){
      this.isDrawerOpen = !this.isDrawerOpen
      this.hasOverlay = !this.hasOverlay
      this.checkOverlay()
    },
    checkOverlay(){
      const appBody = document.getElementById('app')
      if(this.hasOverlay){
        appBody.classList.add('noscroll')
        return
      }
      return appBody.classList.remove('noscroll')
    },
    // Mobile detection
    checkScreen(){
      const windowWidth = window.innerWidth
      if(windowWidth <992){
          this.isScreenSmall = true
          this.isDrawerOpen = null
          return 
      }else{
          this.isScreenSmall = false
          this.isDrawerOpen = true
          return 
      }
    },

// control stickybuttom to show and hide according the Y position
    checkIsMainSection(){
      if(this.isScreenSmall){
        const selectionBar = document.querySelector('.selection-bar')
        const stickyButton = document.querySelector('.btn-sticky')
        let distanceToTop= selectionBar.getBoundingClientRect().top
        if(distanceToTop==0){
          stickyButton.style.bottom = "0px"
          if((window.innerHeight+window.scrollY)>document.body.scrollHeight-100){
            stickyButton.style.bottom="-50px"
          }
          return
        }
        stickyButton.style.bottom="-50px"
      }
      return 
    }
},
  created(){
    this.checkScreen()
    window.addEventListener('resize',this.checkScreen)
    window.addEventListener('scroll',this.checkIsMainSection)  

  },

  mounted(){
    this.$nextTick(function(){
      this.checkIsMainSection()
      
    })
  }


}
</script>


<style lang="scss">
@import './style/app.scss';
// Global
p{
  font-weight:300;
}
.b-icon{
  margin-right:8px;
}
#app {
  &.noscroll{
    height:100vh;
    overflow: hidden;
  }
}

// Transition for routes

.fade-enter-active, .fade-leave-active{
  transition: opacity .2s
}

.fade-enter, .fade-leave-to{
  opacity: 0;
}




</style>
