<template>
  <div class="relative">
    <AppNavbar :routes="routes" />
    <Nuxt
      class="
        container
        mx-auto
        min-h-screen
        px-3
        py-5
        md:py-10
        w-full
        xl:w-10/12
      "
    />
    <AppFooter :routes="routes" />
    <AppBackToTop
      class="
        fixed
        right-1
        bottom-[0.375rem]
        md:right-5 md:bottom-5
        cursor-pointer
      "
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      routes: [
        { name: 'Collection', id: 'list', path: '/list/' },
        // { name: 'Wiki', id: 'wiki', path: '/wiki/' },
      ],
    }
  },
})
</script>
