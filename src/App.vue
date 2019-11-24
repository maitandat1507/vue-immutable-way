<template>
  <div id="app">
    <img width="100px" src="./assets/logo.png">
    <div class="container">
      <search-box :searchContent="searchContent"/>
      <product-data-list :products="products"/>
    </div>
  </div>
</template>

<script>
import ProductDataList from './components/ProductDataList.vue'
import SearchBox from './components/SearchBox.vue'
import products from './mock/products.js'

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
