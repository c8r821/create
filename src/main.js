// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Buefy from 'buefy'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Cleave from 'cleave.js'

Vue.use(Buefy, {
  defaultIconPack: 'fas'
});
Vue.use(VueAxios, Axios);
Vue.directive('cleave', (el, binding) => {
  const input = el.querySelector('input');
  new Cleave(input, binding.value);
});
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
