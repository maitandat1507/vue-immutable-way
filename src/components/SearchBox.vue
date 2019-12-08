<template>
  <div class="row">
    <div class="offset-md-8 col-md-4 search-box">
      <input type="text" class="form-control search-box__input"
        v-model="searchContent"
        ref="searchContent">
      <i class="fa fa-search search-box__icon"></i>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main'
import { mapGetters } from 'vuex'

export default {
  data: function() {
    return {
      searchContent: ''
    }
  },
  watch: {
    searchContent: function(newValue) {
      // --- WAY 1:
      // this.$emit('update-search-content', newValue)

      // --- WAY 2 (use EventBus)
      // eventBus.$emit('searchContentEdited', newValue)

      // --- WAY 3 (use Vuex)
      // this.$store.state.searchContent = newValue

      // --- WAY 4 (using Mutations in Vuex)
      // this.$store.commit('changeSearchContent', newValue)

      // --- WAY 5 (using Actions in Vuex)
      this.$store.dispatch('changeSearchContent', newValue)
    },
  },
  computed: {
    ...mapGetters([
      'getSearchContent',
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