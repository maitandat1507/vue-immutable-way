<template>
  <div id="app">
    <img width="100px" src="./assets/logo.png">
    <div class="container">
      <p>from App: {{ getSearchContent }}</p>
      <p>from App, search Async result (after few seconds): {{ getSearchContentAsync }}</p>
      <search-box/>
      <search-box-async/>
      <product-data-list
        :products="products"/>
    </div>
  </div>
</template>

<script>
import ProductDataList from './components/ProductDataList.vue'
import SearchBox from './components/SearchBox.vue'
import SearchBoxAsync from './components/SearchBoxAsync.vue'
import products from './mock/products.js'
import { eventBus } from './main'
import { mapGetters } from 'vuex'

export default {
  name: "App",
  components: {
    ProductDataList,
    SearchBox,
    SearchBoxAsync,
  },

  data: function() {
    return {
      products,
    }
  },

  methods: {
    // TODO
  },

  created() {},

  computed: {
    ...mapGetters([
      'getSearchContent',
      'getSearchContentAsync'
    ]),
  },


};
</script>

<style scoped lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
