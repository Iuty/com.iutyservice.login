import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'

import 'jquery.cookie'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
