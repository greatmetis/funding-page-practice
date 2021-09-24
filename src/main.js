import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue, BIcon,BIconHeartFill,BIconShareFill, IconsPlugin} from 'bootstrap-vue'
import '@/style/app.scss'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


// Import Icons
Vue.component('BIcon',BIcon)
Vue.component('BIconHeartFill',BIconHeartFill)
Vue.component('BIconShareFill',BIconShareFill)



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
