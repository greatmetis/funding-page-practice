import Vue from 'vue'
import VueRouter from 'vue-router'
import ProjectIntro from '../views/ProjectIntro.vue'
import Progress from '../views/Progress.vue'
import FAQ from '../views/FAQ.vue'
import Comments from '../views/Comments.vue'
// import StickyButton from '../views/StickyButton.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ProjectIntro',
    components:{
      default:ProjectIntro,
      // helper: StickyButton,
    },
    
  },
  {
    path: '/progress',
    name: 'Progress',
    component:Progress,
  },
  {
    path: '/faq',
    name: 'FAQ',
    component:FAQ,
  },
  {
    path: '/comments',
    name: 'Comments',
    component:Comments,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
