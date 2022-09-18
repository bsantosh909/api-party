<template>
  <footer>
    <div
      class="w-full py-5 bg-gray-200 dark:bg-cyan-800 pb-20 md:pb-5 px-2 text-center"
    >
      <span>Copyright ©️ 2020-</span>
      <span>{{ new Date().getFullYear() }}</span>

      <NuxtLink
        href="https://santoshb.com.np?ref=apiParty"
        class="text-yellow-700 dark:text-yellow-300 ml-2"
      >
        Santosh Bhandari
      </NuxtLink>
    </div>

    <div
      class="fixed bottom-0 px-2 py-1 block md:hidden bg-gray-200 dark:bg-cyan-800 border-t border-gray-50 dark:border-cyan-600 w-full z-10"
    >
      <div class="flex justify-center gap-x-5">
        <NuxtLink
          v-for="route of routes"
          :key="route.id"
          :to="route.path"
          active-class="border-gray-400 dark:bg-cyan-900 dark:border-cyan-700 rounded"
          class="w-20 text-center py-1"
        >
          <div class="flex justify-center">
            <div v-if="route.id === 'collection'">
              <IconsList width="20" height="20" />
            </div>

            <div v-if="route.id === 'wiki'">
              <IconsWiki width="20" height="20" />
            </div>
          </div>

          <span class="text-xs">
            {{ route.name }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { IRouteItem } from "~~/src/utils/types";

interface IFooterProps {
  routes: IRouteItem[];
}

defineProps<IFooterProps>();
</script>
