import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
library.add(faStar);
Vue.component('font-awesome-icon', FontAwesomeIcon);




Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
