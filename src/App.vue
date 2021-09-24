<template>
  <div id="app">
    <Navbar />
    <Hero />
    <SelectionBar />
    <div class="container pb-5">
      <b-row no-gutters>
        <b-col lg="8">
          <router-view></router-view>
          <Form />
        </b-col>
        <b-col lg="4" class="pl-5">
          <RightSideColumn/>
        </b-col>
      </b-row>
    </div>
    <Footer />
  </div>
</template>

<script>
import Hero from '@/components/Hero/Hero.vue'
import Navbar from '@/components/Hero/Navbar.vue'
import SelectionBar from '@/components/SelectionBar.vue'
import Form from '@/components/Form.vue'
import RightSideColumn from '@/components/RightSideColumn.vue'
import Footer from '@/components/Footer.vue'
export default {
  components:{
    Hero,
    Navbar,
    SelectionBar,
    Form,
    RightSideColumn,
    Footer
  },
  prop:[],
  data(){
    return{

    }
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
  
}


</style>
