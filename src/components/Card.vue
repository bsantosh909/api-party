<template>
  <div class="rounded w-[22rem] relative select-none">
    <div v-if="features.https" class="ribbon">
      <span
        class="
          dark:text-with-shadow
          bg-gradient-to-b
          from-green-300
          via-lime-300
          to-green-300
          dark:from-green-700 dark:via-lime-700 dark:to-green-700
        "
      >
        HTTPS
      </span>
    </div>
    <!-- Card Header -->
    <div class="rounded-t bg-gray-200 dark:bg-cyan-800 py-3 md:py-5 relative">
      <div class="flex justify-center h-24">
        <nuxt-picture
          :src="getLogo()"
          :alt="logo ? `${name}'s logo` : 'API logo'"
          width="100"
          fit="contain"
          class="my-auto drop-shadow-lg"
        />
      </div>
      <!-- <div class="w-20 h-20 mx-auto bg-black dark:bg-white">
        Image goes here
      </div> -->
      <div class="my-2 md:my-5">
        <p class="font-semibold text-xl my-auto inline dark:text-with-shadow">
          {{ name }}
        </p>
        <IconVerified
          v-if="features.official"
          class="w-5 h-5 text-yellow-500 mb-[0.37rem] ml-1 inline"
        />
      </div>
      <div class="flex flex-wrap justify-center">
        <Badge
          v-for="(cat, i) of categories"
          :key="i"
          class="mx-2 my-1"
          :category="cat"
          active
          small
        />
      </div>
    </div>
    <!-- Card Body -->
    <div
      class="
        rounded-b
        border-l border-r border-b border-gray-300
        dark:border-cyan-900
        shadow
        py-2
        px-5
      "
    >
      <p>{{ description }}</p>
      <div class="mt-5 flex flex-wrap justify-center">
        <a
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-emerald-300 dark:bg-emerald-800 px-4 py-1 mx-1 rounded-md"
        >
          <p class="inline">Visit API</p>
          <IconExternalLink class="w-4 h-4 ml-2 mb-1 inline" />
        </a>
        <!-- <nuxt-link :to="`/api/${slug}`"  class="bg-violet-300 dark:bg-violet-800 px-2 py-1 mx-1 rounded-md flex-grow">
          Read More
        </nuxt-link> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    slug: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    features: {
      type: Object,
      required: false,
      default() {
        return {}
      },
    },
    url: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    getLogo() {
      return this.logo ? `/logo/${this.logo}` : '/logo/default.png'
    },
  },
})
</script>

<style lang="postcss" scoped>
.ribbon {
  position: absolute;
  left: -5px;
  top: -5px;
  z-index: 1;
  overflow: hidden;
  width: 75px;
  height: 75px;
  text-align: right;
}
.ribbon span {
  font-size: 10px;
  text-align: center;
  font-weight: bold;
  line-height: 20px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  width: 100px;
  display: block;
  /* 
  background: #0d7408;
  background: linear-gradient(#1add0f 0%, #0d7408 100%);
   */
  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
  position: absolute;
  top: 19px;
  left: -21px;
}
.ribbon span::before {
  content: '';
  position: absolute;
  left: 0px;
  top: 100%;
  z-index: -1;
  border-left: 3px solid #0d7408;
  border-right: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #0d7408;
}
.ribbon span::after {
  content: '';
  position: absolute;
  right: 0%;
  top: 100%;
  z-index: -1;
  border-right: 3px solid #0d7408;
  border-left: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #0d7408;
}
</style>
