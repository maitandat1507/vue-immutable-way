import Vue from "vue";
import App from "./App.vue";
import 'bootstrap/dist/css/bootstrap.css';

import { store } from './store/store'

Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
