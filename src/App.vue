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
      searchContent: '', // main STATE
    }
  },
  methods: {
    // TODO
  },
  created() {
    eventBus.$on('searchContentEdited', (newContent) => {
      this.searchContent = newContent
      console.log('from App, update via Event Bus: ', this.searchContent)
    })
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
