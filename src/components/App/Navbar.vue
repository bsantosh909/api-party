<template>
  <nav class="sticky top-0 z-10">
    <div class="w-full py-2 px-4 bg-gray-200 dark:bg-cyan-800 shadow">
      <div class="flex justify-between">
        <nuxt-link to="/">
          <img
            src="@/assets/image/logo2.png"
            alt="API Party Logo"
            class="h-12 w-auto"
          />
        </nuxt-link>
        <div class="hidden md:flex my-auto mr-12">
          <nuxt-link
            v-for="route of routes"
            :key="route.id"
            :to="route.path"
            class="
              p-2
              mx-2
              text-center
              hover:bg-gray-300
              dark:hover:bg-cyan-900
              rounded
            "
            active-class="bg-gray-300 dark:bg-cyan-900 rounded font-semibold"
          >
            <IconList
              v-if="route.id === 'list'"
              class="w-5 h-5 mb-1 mx-auto inline"
            />
            <IconWiki
              v-if="route.id === 'wiki'"
              class="w-5 h-5 mb-1 mx-auto inline"
            />
            <span class="ml-1"> {{ route.name }} </span>
          </nuxt-link>
        </div>
      </div>
      <div class="absolute top-3 right-2">
        <button class="w-10 h-10 focus:outline-none" @click="changeTheme">
          <transition name="fade" mode="out-in">
            <IconSun
              v-if="$colorMode.preference === 'light'"
              class="w-10 h-10"
            />
            <IconMoon v-else class="w-10 h-10" />
          </transition>
        </button>
      </div>
    </div>
  </nav>
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
  methods: {
    changeTheme() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light'
    },
  },
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
