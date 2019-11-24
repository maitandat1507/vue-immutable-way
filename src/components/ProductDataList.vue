<template>
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
        <tr v-for="(item, index) in products" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>{{item.quantity}}</td>
          <td>
            <button class="btn btn-danger">
              <i class="fa fa-remove" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['products'],

  data: function() {
    return {
      //
    }
  },

  created: function() {
    //
  },

  mounted: function() {},

  methods: function() {
    //
  },
}
</script>