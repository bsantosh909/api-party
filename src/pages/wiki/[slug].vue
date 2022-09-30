<template>
  <div>
    <h1 class="text-center text-4xl font-semibold">{{ article?.title }}</h1>

    <article class="prose dark:prose-invert lg:prose-xl">
      <ContentRenderer :value="article" />
    </article>
  </div>
</template>

<script setup lang="ts">
import { WikiItem } from "~~/src/utils/types";

//
const route = useRoute();

// Fetching the API items
const article = await queryContent<WikiItem>(
  `/wiki/${route.params.slug}`
).findOne();
</script>
