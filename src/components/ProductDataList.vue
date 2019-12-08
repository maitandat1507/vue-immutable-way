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
import { eventBus } from '../main'

export default {
  props: ['products'],

  watch: {
    searchContent() {
      console.log('from ProductDataList, via Event Bus (using `STORE Vuex`): ', this.$store.state.searchContent)
    }
  },

  computed: {
    searchContent() {
      return this.$store.state.searchContent
    }
  },

  data: function() {
    return {
      //
    }
  },

  created: function() {
    //
  },

  mounted: function() {},

  methods: {
    //
  },
}
</script>