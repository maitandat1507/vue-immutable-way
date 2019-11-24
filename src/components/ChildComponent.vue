<template>
  <div>
    <h3>{{tada}}</h3>
    <button @click="localPrintt">Test localPrintl</button>
  </div>
</template>

<script>
export default {
  props: ['tada'],
  data: function() {
    return {
      tada1: 4
    }
  },
  methods: {
    localPrintt: function() {
      let vm = this
      let tada = 3
    },
  },
  componenents: {

  }
}

</script>