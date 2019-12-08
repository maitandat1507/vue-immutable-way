<template>
  <div id="app">
    <img width="100px" src="./assets/logo.png">
    <div class="container">
      <search-box/>
      <product-data-list
        :products="products"
        :searchContent="searchContent"/>
    </div>
  </div>
</template>

<script>
import ProductDataList from './components/ProductDataList.vue'
import SearchBox from './components/SearchBox.vue'
import products from './mock/products.js'
import { eventBus } from './main'

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
    searchContent() {
      console.log('from App, show searchContent from Store Vuex', this.$store.state.searchContent)
      return this.$store.state.searchContent;
    }
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
