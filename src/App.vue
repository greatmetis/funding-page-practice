<template>
  <div id="app">
    <Navbar />
    <Hero />
  </div>
</template>

<script>
import Hero from '@/components/Hero/Hero.vue'
import Navbar from '@/components/Hero/Navbar.vue'

export default {
  components:{
    Hero,
    Navbar,
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

.b-icon{
  margin-right:8px;
}

#app {
  
}


</style>
