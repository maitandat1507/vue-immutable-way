<template>
  <div id="app">
    <img width="100px" src="./assets/logo.png">
    <div class="container">
      <div class="row">
        <div class="offset-md-8 col-md-4 search-box">
          <input type="text" class="form-control search-box__input">
          <i class="fa fa-search search-box__icon"></i>
        </div>
      </div>
      <div class="row mt-2">
        <table class="table table-striped table-hover">
          <thead>
            <tr class="font-weight-bold">
              <td>Name</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Macbook Pro 15" 2015</td>
              <td>1000</td>
              <td>8</td>
              <td>
                <button class="btn btn-danger">
                  <i class="fa fa-remove" />
                </button>
              </td>
            </tr>
            <tr>
              <td>iPad 10 Pro 2018</td>
              <td>2500</td>
              <td>19</td>
              <td>
                <button class="btn btn-danger">
                  <i class="fa fa-remove" />
                </button>
              </td>
            </tr>
            <tr>
              <td>ear-pod 2</td>
              <td>800</td>
              <td>15</td>
              <td>
                <button class="btn btn-danger">
                  <i class="fa fa-remove" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Samsung Note 10</td>
              <td>3900</td>
              <td>12</td>
              <td>
                <button class="btn btn-danger">
                  <i class="fa fa-remove" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Surface Pro 6</td>
              <td>1999</td>
              <td>7</td>
              <td>
                <button class="btn btn-danger">
                  <i class="fa fa-remove" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
    //
  }
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

.search-box {
  &__input {
    position: relative;
    padding-right: 35px;
  }

  &__icon {
    position: absolute;
    right: 20px;
    line-height: 35px;
    top: 0;
    height: 35px;
    width: 35px;
  }
}
</style>
