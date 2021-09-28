<template>
  <div id="app">
    <Navbar @triggerLoginForm="triggerLoginForm"/>
    <Hero />
    <SelectionBar />
    <div class="container pb-5">
      <b-row>
        <b-col lg="8">
          <router-view></router-view>
          <Form/>
        </b-col>
        <b-col lg="4">
          <RightSideColumn/>
        </b-col>
        <!-- <b-col lg="8">
          <Form />
        </b-col> -->
      </b-row>
    </div>
    <Footer />
    <Login v-if="!logined" @closeLoginForm="closeLoginForm"/>
  </div>
</template>

<script>
import Hero from '@/components/Hero/Hero.vue'
import Navbar from '@/components/Hero/Navbar.vue'
import SelectionBar from '@/components/SelectionBar.vue'
import Form from '@/components/Form.vue'
import RightSideColumn from '@/components/RightSideColumn.vue'
import Footer from '@/components/Footer.vue'
import Login from '@/components/Login.vue'
export default {
  components:{
    Hero,
    Navbar,
    SelectionBar,
    Form,
    RightSideColumn,
    Footer,
    Login
  },
  prop:[],
  data(){
    return{
      logined:true,
    }
  },
  methods:{
    triggerLoginForm(){
      this.logined = false
    },
    closeLoginForm(){
      this.logined = true
    }
  },
  computed:{

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
  .faq{
      margin-top: 48px;
  }
}


@media (max-width:425px){
  .faq{
    margin-top: 32px;
  }
}

</style>
