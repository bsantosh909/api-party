<template>
  <div>
    <div class="py-10 text-center flex flex-wrap justify-center">
      <div v-for="(item, i) of items" :key="i" class="mx-2 my-4 md:mx-5">
        <Card
          :slug="item.slug"
          :name="item.name"
          :description="item.description || ''"
          :categories="item.categories"
          :features="item.features"
          :url="item.url"
          :logo="item.logo"
        />
      </div>
      <p
        v-if="!items.length && !$fetchState.pending"
        class="text-2xl italic font-semibold text-center"
      >
        No API found for the specified category/filter!
      </p>
    </div>
    <!-- Infinite loading -->
    <div>
      <LazyObserver :active="hasMore" @intersect="getMoreItems" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

export default Vue.extend({
  props: {
    category: {
      type: String,
      default: 'all',
    },
    query: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      skip: 0,
      limit: 15,
      items: [] as IContentDocument[],
      hasMore: false,
    }
  },
  async fetch() {
    const items = await this.fetchItems()
    this.items = items
    this.hasMore = true
  },
  watch: {
    async query() {
      this.items = await this.fetchItems()
    },
  },
  methods: {
    async fetchItems(skipPrevious = false) {
      const query = this.$content('apis', { deep: true })
        .only([
          'name',
          'description',
          'categories',
          'features',
          'url',
          'slug',
          'logo',
        ])
        .limit(this.limit)
        .sortBy('features.https', 'desc')
        .sortBy('name')
      if (this.category !== 'all')
        query.where({
          categories: {
            $contains: this.category.replace(/-/g, ' '),
          },
        })
      if (skipPrevious && this.skip > 0) query.skip(this.skip)
      if (this.query) query.search(this.query)

      const items = (await query.fetch()) as IContentDocument[]
      this.skip += items.length

      return items
    },
    async getMoreItems() {
      const items = await this.fetchItems(true)
      if (!items.length) {
        this.hasMore = false
        return
      }
      this.items.push(...items)
    },
  },
})
</script>
