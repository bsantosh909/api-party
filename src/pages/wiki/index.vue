<template>
  <div>
    <div class="text-center">
      <h2 class="text-3xl">Want to learn about API?</h2>
      <p>
        Get to know about different aspect of API through some detailed articles
        right here!
      </p>
    </div>

    <div class="mt-20">
      <div
        v-for="(wiki, i) of wikiArticles"
        :key="i"
        class="border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 rounded shadow"
      >
        <NuxtLink :to="wiki._path">
          <div class="p-5 cursor-pointer">
            <h3 class="text-2xl font-semibold">{{ wiki.title }}</h3>
            <p>{{ wiki.description }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { WikiItem } from "~~/src/utils/types";
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

// Fetching the API items
const wikiArticles = await queryContent<WikiItem>("/wiki")
  .only(["title", "description", "_path"])
  .find();
</script>
