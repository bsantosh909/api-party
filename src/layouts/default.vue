<template>
  <div class="flex flex-col min-h-screen w-full select-none">
    <AppNavbar :routes="routes" />
    <NuxtPage class="flex-grow p-3 md:p-10" />
    <AppFooter :routes="routes" />
  </div>
</template>

<script setup lang="ts">
import { IRouteItem } from "../utils/types";
import { formatTitle } from "../utils/helpers";

const routes = ref<IRouteItem[]>([
  { name: "Collection", id: "collection", path: "/collection" },
  { name: "Wiki", id: "wiki", path: "/wiki" },
]);

//
const title = "API Party - The ultimate collection of APIs";
const description =
  "The ultimate list of awesome API collection. Also a Wiki about API!";

//
const metaItems = useSEO({ title, description });

//
useHead({
  titleTemplate(titleSection) {
    return titleSection ? formatTitle(titleSection) : title;
  },
  meta: metaItems,
});
</script>
