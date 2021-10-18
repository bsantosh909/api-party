<template>
  <div>
    <div class="border-b-2 border-gray-300 dark:border-cyan-800">
      <div class="flex flex-wrap justify-center">
        <nuxt-link to="/list/" class="m-1">
          <Badge category="all" :active="!$route.params.category" />
        </nuxt-link>
        <nuxt-link
          v-for="(cat, i) of categories"
          :key="i"
          :to="`/list/${cat.replace(/ /g, '-')}/`"
          class="m-1"
        >
          <Badge :category="cat" :active="isActive(cat)" />
        </nuxt-link>
      </div>
      <!-- Filters to shorten the result list -->
      <div align="center" class="my-10 flex justify-center">
        <div class="max-w-xs w-full flex">
          <input
            ref="search-input"
            v-model="query"
            type="text"
            class="
              appearance-none
              font-semibold
              w-full
              px-3
              py-2
              text-gray-800
              border border-gray-300
              placeholder-gray-500
              rounded-md
              focus:outline-none focus:z-10
              sm:text-sm
            "
            placeholder="Search for API"
          />
        </div>
      </div>
    </div>
    <nuxt-child :query="query" />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const data = await $content('apis', { deep: true, watch: false })
      .only('categories')
      .fetch()

    const group = data.map((d) => d.categories || [])
    const list = []

    for (const items of group) {
      for (const item of items) {
        const itemName = item.toLowerCase()
        if (!list.includes(itemName)) list.push(itemName)
      }
    }

    return { categories: list.sort() }
  },
  data() {
    return {
      query: '',
    }
  },
  methods: {
    isActive(category) {
      const paramCat = this.$route.params.category
      return paramCat ? paramCat.toLowerCase() === category : false
    },
  },
})
</script>
