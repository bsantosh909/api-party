<template>
  <div
    class="font-semibold rounded select-none capitalize dark:text-with-shadow bg-gray-200 dark:bg-cyan-800 border"
    :class="[
      small ? 'px-2 py-1' : 'px-3 py-1',
      active
        ? 'border-gray-800 dark:border-gray-200 shadow-lg'
        : 'border-gray-200 dark:border-gray-700 shadow',
    ]"
  >
    <div class="flex">
      <!-- Icons for categories -->
      <img
        :src="`/category-icon/${category.toLowerCase()}.svg`"
        :class="small ? 'w-5 h-5 mr-1' : 'w-6 h-6 mr-2'"
        class="drop-shadow category-image object-contain my-auto"
        onerror="this.onerror=null;this.src='/category-icon/all.svg'"
      />
      <!-- Icons section ends here -->
      <span class="my-auto ml-1" :class="small ? 'text-sm' : 'text-base'">
        {{ category.replace(/-/, " ") }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IBadgeProps {
  category: string;
  active?: boolean;
  small?: boolean;
}

defineProps<IBadgeProps>();
</script>
