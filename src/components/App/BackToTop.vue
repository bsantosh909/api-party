<template>
  <transition v-if="visible" name="fade-slide" mode="out-in" appear>
    <div
      class="
        rounded-full
        bg-teal-200
        dark:bg-teal-700
        border-2 border-gray-800
        dark:border-gray-200
        z-20
      "
      @click="scrollToTop"
    >
      <IconTop class="w-7 h-7 md:w-10 md:h-10 m-1" />
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      visible: false,
      timer: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener)
  },
  methods: {
    scrollToTop() {
      window.scroll({ top: 0, behavior: 'smooth' })
    },
    scrollListener() {
      this.visible = window.scrollY > 500
    },
  },
})
</script>
