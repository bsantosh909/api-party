<template>
  <Collection key="all" category="all" :query="query" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    query: {
      type: String,
      required: true,
    },
  },
})
</script>
