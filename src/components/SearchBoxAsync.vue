<template>
  <div class="row">
    <div class="offset-md-8 col-md-4 search-box mt-2">
      <input type="text" class="form-control search-box__input"
        placeholder="Search async"
        v-model="searchContentAsync"
        ref="searchContentAsync">
      <i class="fa fa-search search-box__icon"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: function() {
    return {
      searchContentAsync: ''
    }
  },
  watch: {
    searchContentAsync: function(newValue) {
      // --- WAY 5: async (using Actions in Vuex)
      this.$store.dispatch('changeSearchContentAsync', newValue)
    },
  },
  computed: {
    ...mapGetters([
      'getSearchContentAsync',
    ]),
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
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