<template>
  <div>
    <h2 class="text-3xl text-center">Coming soon...</h2>
  </div>
</template>

<script setup lang="ts">
import { formatTitle } from "~~/src/utils/helpers";

//
const title = "Wiki on APIs";
const description =
  "Let's learn what exactly is API and all the possibilities around it!";

//
const metaTags = useSEO({ title: formatTitle(title), description });

//
useHead({
  title,
  meta: metaTags,
});
</script>
