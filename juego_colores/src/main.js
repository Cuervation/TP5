import Vue from 'vue'
import App from './App.vue'
//import './bootstrap'
import "./assets/styles/style.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
