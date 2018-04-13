// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Buefy from 'buefy'
import Cleave from 'cleave.js'

import 'buefy/lib/buefy.css'

Vue.use(Buefy);
Vue.directive('cleave', (el, binding) => {
  const input = el.querySelector('input')
  new Cleave(input, binding.value)
});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
