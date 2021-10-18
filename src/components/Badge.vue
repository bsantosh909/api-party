<template>
  <div
    class="
      font-semibold
      rounded-full
      select-none
      capitalize
      dark:text-with-shadow
      bg-gray-200
      dark:bg-cyan-800
      border
    "
    :class="[
      category.toLowerCase().replace(/ /g, '-'),
      small ? 'px-2 py-1' : 'px-3 py-1',
      active
        ? 'border-gray-800 dark:border-gray-200 shadow-lg'
        : 'border-gray-200 dark:border-gray-700 shadow',
    ]"
  >
    <div class="flex">
      <!-- Icons for categories -->
      <img
        :src="`/category-icon/${category.toLowerCase().replace(/ /g, '-')}.svg`"
        :class="small ? 'badge-small' : 'badge'"
        class="drop-shadow category-image object-contain"
        onerror="this.onerror=null;this.src='/category-icon/all.svg'"
      />
      <!-- Icons section ends here -->
      <span class="my-auto" :class="small ? 'text-sm' : 'text-base'">
        {{ category }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    category: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style scoped lang="postcss">
.badge {
  @apply w-6 h-6 my-auto mr-2;
}
.badge-small {
  @apply w-5 h-5 my-auto mr-1;
}
.animals {
  @apply bg-gradient-to-tl from-green-300 to-amber-300 dark:from-green-700 dark:to-amber-700;
}
.anime {
  @apply bg-gradient-to-t from-red-300 via-rose-300 to-amber-300 dark:from-red-700 dark:via-rose-700 dark:to-amber-700;
}
.comics {
  @apply bg-gradient-to-bl from-yellow-200 via-pink-300 to-indigo-300 dark:from-yellow-600 dark:via-pink-600 dark:to-indigo-700;
}
.cryptocurrency {
  @apply bg-gradient-to-r from-yellow-300 to-orange-300 dark:from-yellow-700 dark:to-orange-700;
}
.development {
  @apply bg-gradient-to-tl from-gray-300 to-yellow-300 dark:from-gray-600 dark:to-yellow-600;
}
.entertainment {
  @apply bg-gradient-to-br from-teal-200 via-purple-300 to-rose-300 dark:from-teal-700 dark:via-purple-700 dark:to-rose-700;
}
.games {
  @apply bg-gradient-to-tr from-pink-200 via-orange-300 to-red-300 dark:from-pink-600 dark:via-orange-600 dark:to-red-800;
}
.geocoding {
  @apply bg-gradient-to-b from-emerald-300 to-blue-300 dark:from-emerald-700 dark:to-blue-700;
}
.health {
  @apply bg-gradient-to-br from-emerald-300 to-rose-300 dark:from-emerald-700 dark:to-rose-700;
}
.images {
  @apply bg-gradient-to-br from-gray-300 to-emerald-300 dark:from-gray-700 dark:to-emerald-700;
}
.miscs {
  @apply bg-gradient-to-tl from-purple-300 to-emerald-300 dark:from-purple-600 dark:to-emerald-600;
}
.movies {
  @apply bg-gradient-to-bl from-sky-300 to-yellow-300 dark:from-sky-700 dark:to-yellow-700;
}
.music {
  @apply bg-gradient-to-tl from-green-300 to-blue-300 dark:from-green-700 dark:to-blue-700;
}
.social {
  @apply bg-gradient-to-r from-yellow-200 to-orange-200 dark:from-yellow-600 dark:to-orange-600;
}
.sports {
  @apply bg-gradient-to-bl from-blue-200 to-purple-300 dark:from-blue-600 dark:to-purple-700;
}
.weather {
  @apply bg-gradient-to-tr from-gray-200 to-sky-200 dark:from-gray-600 dark:to-sky-600;
}
</style>
