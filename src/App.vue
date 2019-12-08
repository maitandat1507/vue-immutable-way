<template>
  <div id="app">
    <img width="100px" src="./assets/logo.png">
    <div class="container">
      <p>from App: {{ getSearchContent }}</p>
      <search-box/>
      <product-data-list
        :products="products"/>
    </div>
  </div>
</template>

<script>
import ProductDataList from './components/ProductDataList.vue'
import SearchBox from './components/SearchBox.vue'
import products from './mock/products.js'
import { eventBus } from './main'
import { mapGetters } from 'vuex'

export default {
  name: "App",
  components: {
    ProductDataList,
    SearchBox,
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
      'getSearchContent'
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
