<template>
  <footer>
    <div
      class="
        w-full
        py-5
        bg-gray-200
        dark:bg-cyan-800
        pb-[4.5rem]
        md:pb-5
        px-2
        text-center
      "
    >
      <span> Copyright ©️ 2020-2021 </span>
      <a
        href="https://santoshb.com.np?ref=apiParty"
        class="text-red-800 dark:text-red-400"
      >
        Santosh Bhandari
      </a>
    </div>
    <div
      class="
        fixed
        bottom-0
        px-2
        py-1
        block
        md:hidden
        bg-gray-200
        dark:bg-cyan-800
        border-t border-gray-50
        dark:border-cyan-600
        w-full
        z-10
      "
    >
      <div class="flex justify-around">
        <nuxt-link
          v-for="route of routes"
          :key="route.id"
          :to="route.path"
          active-class="font-bold"
        >
          <IconList v-if="route.id === 'list'" class="w-5 h-5 mx-auto" />
          <IconWiki v-if="route.id === 'wiki'" class="w-5 h-5 mx-auto" />
          <span class="text-xs"> {{ route.name }} </span>
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
})
</script>
