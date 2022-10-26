<template>
  <div class="lg:grid grid-cols-7 gap-x-5 md:gap-y-10">
    <!-- Filters (left grid) -->
    <div class="lg:col-span-2">
      <div
        class="md:sticky top-24 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 w-full p-3 rounded shadow"
      >
        <div class="w-full">
          <fieldset>
            <label for="searchInput" class="text-sm">Search for an API:</label>

            <div class="relative mt-[2px]">
              <input
                name="searchInput"
                v-model="searchInput"
                placeholder="Enter to search for an API"
                class="w-full rounded shadow-sm py-2 pl-3 pr-9 focus:outline-none focus:shadow border border-gray-300 dark:border-gray-600 text-black dark:text-white bg-white dark:bg-gray-900"
              />

              <div
                v-if="searchInput.length"
                class="absolute h-full top-0 flex items-center right-2 text-gray-500 cursor-pointer"
                @click="resetSearchInput"
              >
                <IconsCross width="24" heigh="24" />
              </div>
            </div>
          </fieldset>
        </div>

        <!-- Category Filters -->
        <div>
          <div class="mt-5 mb-1 flex justify-between text-sm">
            <p>Filter by Categories:</p>

            <p
              v-if="selectedCategories.length"
              @click="resetCategories"
              class="text-red-700 dark:text-red-400 cursor-pointer"
            >
              Reset Categories
            </p>
          </div>

          <!-- Categories select list -->
          <div class="p-1 mb-5 bg-gray-300 dark:bg-gray-700 rounded shadow">
            <div class="p-2 h-80 overflow-y-scroll flex flex-col gap-y-2">
              <div v-for="(category, ind) in allCategories" :key="ind">
                <fieldset class="flex">
                  <input
                    type="checkbox"
                    :id="category.name"
                    :value="category.key"
                    v-model="selectedCategories"
                    class="w-4 h-4 my-auto mr-2 cursor-pointer"
                  />

                  <label
                    :for="category.name"
                    class="capitalize cursor-pointer flex gap-x-2 items-center"
                  >
                    <span>
                      {{ category.name }}
                    </span>
                    <span class="text-sm font-semibold">
                      ({{ category.count }})
                    </span>
                  </label>
                </fieldset>
              </div>
            </div>
          </div>
        </div>

        <!-- Other filers -->
        <!-- HTTPs Only -->
        <div>
          <div class="p-2 mb-4 bg-gray-300 dark:bg-gray-700 rounded shadow">
            <fieldset class="flex">
              <input
                type="checkbox"
                id="https-only"
                class="w-4 h-4 my-auto mr-2 cursor-pointer"
                v-model="httpsOnly"
              />
              <label for="https-only" class="cursor-pointer">
                Secure only (HTTPs)
              </label>
            </fieldset>
          </div>

          <!-- Show Deprecated-->
          <div class="p-2 bg-gray-300 dark:bg-gray-700 rounded shadow">
            <fieldset class="flex">
              <input
                type="checkbox"
                id="show-deprecated"
                class="w-4 h-4 my-auto mr-2 cursor-pointer"
                v-model="showDeprecated"
              />
              <label for="show-deprecated" class="cursor-pointer">
                Show deprecated APIs
              </label>
            </fieldset>
          </div>

          <!-- Free APIs -->
          <!-- <div class="p-2 mb-4 bg-gray-300 dark:bg-gray-700 rounded shadow">
            <fieldset class="flex">
              <input
                type="checkbox"
                id="free-api"
                class="w-4 h-4 my-auto mr-2 cursor-pointer"
                v-model="freeOnly"
              />
              <label for="free-api" class="cursor-pointer"> Free APIs </label>
            </fieldset>
          </div> -->
        </div>
      </div>
    </div>

    <!-- Actual list (right) -->
    <div class="lg:col-span-5 pt-20 -mt-12 lg:-mt-20" ref="apiListRef">
      <div
        v-if="filteredDataWithoutPagination.length"
        class="grid grid-cols-1 gap-2 md:gap-5"
      >
        <div class="mb-2 pb-2 border-b border-gray-600 flex justify-between">
          <p>API collection</p>

          <p>
            <span class="font-semibold">
              {{ skip + 1 }}
            </span>
            <span class="mx-1">-</span>
            <span class="font-semibold">
              {{
                Math.min(skip + perPage, filteredDataWithoutPagination.length)
              }}
            </span>
            <span class="mx-1">out of</span>
            <span>
              {{ filteredDataWithoutPagination.length }}
            </span>
          </p>
        </div>

        <div
          v-for="(api, index) in filteredData"
          :key="index"
          class="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 py-2 px-3 md:p-5 rounded shadow hover:shadow-lg"
        >
          <div class="flex gap-x-5">
            <NuxtImg
              :src="api.logo ? `/logo/${api.logo}` : '/logo/default.png'"
              format="webp"
              class="h-20 w-20 object-contain drop-shadow"
            />

            <div class="my-auto">
              <NuxtLink
                :to="api.url"
                target="_blank"
                class="group"
                :prefetch="false"
              >
                <div class="flex gap-x-2">
                  <h2 class="text-xl font-semibold mb-2 group-hover:underline">
                    {{ api.name }}
                  </h2>

                  <IconsExternalLink width="20" height="20" class="mt-1" />
                </div>
              </NuxtLink>

              <div class="flex flex-wrap gap-2">
                <div v-for="(category, i) of api.categories" :key="i">
                  <ReusableBadge :category="category" small />
                </div>
              </div>
            </div>
          </div>

          <div class="py-3 my-5 border-y border-gray-500">
            {{ api.description }}
          </div>

          <div class="flex gap-x-2">
            <!-- Deprecated badge -->
            <div
              v-if="api.features.deprecated"
              class="flex gap-x-1 items-center text-sm px-2 py-1 bg-red-300 dark:bg-red-700 border border-red-400 dark:border-red-700 rounded shadow"
            >
              <IconsDeprecated width="20" height="20" />
              <span>Deprecated</span>
            </div>

            <!-- HTTPs badge -->
            <div
              v-if="api.features.https"
              class="flex gap-x-1 items-center text-sm px-2 py-1 bg-green-300 dark:bg-green-700 border border-green-400 dark:border-green-700 rounded shadow"
            >
              <IconsHttps width="20" height="20" />
              <span>HTTPs</span>
            </div>

            <!-- Free APIs -->
            <div
              v-if="api.features.payment === 'Free'"
              class="flex gap-x-1 items-center text-sm px-2 py-1 bg-blue-300 dark:bg-[#29479A] border border-blue-400 dark:border-[#29479A] rounded shadow"
            >
              <IconsMoney width="20" height="20" />
              <span>Free</span>
            </div>

            <div
              v-else-if="api.features.payment === 'Upgradable'"
              class="flex gap-x-1 items-center text-sm px-2 py-1 bg-blue-300 dark:bg-[#29479A] border border-blue-400 dark:border-[#29479A] rounded shadow"
            >
              <IconsMoney width="20" height="20" />
              <span>Upgradable</span>
            </div>
            <div
              v-else-if="api.features.payment === 'Paid'"
              class="flex gap-x-1 items-center text-sm px-2 py-1 bg-blue-300 dark:bg-[#29479A] border border-blue-400 dark:border-[#29479A] rounded shadow"
            >
              <IconsMoney width="20" height="20" />
              <span>Paid</span>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <IconsNotFound
          width="128"
          height="128"
          class="text-gray-600 dark:text-gray-400 flex w-full justify-center"
        />

        <div class="mt-2 text-center">
          <p class="text-2xl">No item found matching your search criteria!</p>
          <p class="text-gray-600 dark:text-gray-400">
            Try changing your search input or reset it to check all the items
          </p>
        </div>
      </div>

      <div
        v-if="filteredDataWithoutPagination.length > perPage"
        class="flex justify-end gap-x-3 mt-10"
      >
        <button
          @click="gotoPreviousPage"
          :disabled="isPrevDisabled"
          class="bg-gray-300 dark:bg-cyan-800 px-3 py-2 w-24 rounded shadow disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:cursor-not-allowed disabled:text-gray-400 dark:disabled:text-gray-600"
        >
          Previous
        </button>

        <button
          @click="gotoNextPage"
          :disabled="isNextDisabled"
          class="bg-gray-300 dark:bg-cyan-800 px-3 py-2 w-24 rounded shadow disabled:bg-gray-200 dark:disabled:bg-gray-800 disabled:cursor-not-allowed disabled:text-gray-400 dark:disabled:text-gray-600"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Fuse from "fuse.js";

//
import { ApiItem } from "~~/src/utils/types";
import { formatTitle } from "~~/src/utils/helpers";

// types
interface ICategoryItem {
  key: string;
  name: string;
  count: number;
}

//
const title = "Awesome collection";
const description =
  "Curated list of lots of amazing APIs to power up your project to a new level!";

//
const metaItems = useSEO({
  title: formatTitle(title),
  description,
});

// SEO
useHead({
  title,
  description,
  meta: metaItems,
});

//
const perPage = 10;
const skip = ref(0);

//
const apiListRef = ref(null);

// Filters
const searchInput = ref("");
const selectedCategories = ref([]);
const httpsOnly = ref(false);
const showDeprecated = ref(false);
// const freeOnly=ref(false)

// Resetting skip value every time search input is changed
watch([searchInput, httpsOnly, showDeprecated, selectedCategories], () => {
  skip.value = 0;
});

watch([skip], () => {
  apiListRef.value?.scrollIntoView({ behavior: "smooth" });
});

// Fetching the API items
const data = await queryContent<ApiItem>("/apis")
  .only(["name", "description", "logo", "categories", "url", "features"])
  .sort({ title: 1, "features.https": -1, "features.deprecated": -1 })
  .find();

// Filtering API items
const filteredDataWithoutPagination = computed(() => {
  const dataWithoutInputFilter = data
    // Filter by https only value
    .filter((item) => {
      if (!httpsOnly.value) return true;

      return item.features?.https;
    })
    // Filter deprecated items
    .filter((item) => {
      if (!showDeprecated.value) return !item.features?.deprecated;
      return true;
    })

    // Filter by categories
    .filter((item) => {
      if (!selectedCategories.value.length) return true;

      return selectedCategories.value.some((cat) =>
        item.categories.includes(cat)
      );
    });

  // Initiating fuse search
  const fuseItem = new Fuse(dataWithoutInputFilter, {
    keys: ["name", "description"],
    threshold: 0.3,
    ignoreLocation: true,
  });

  // Searching with text input filter
  const result = searchInput.value
    ? fuseItem.search(searchInput.value).map((itm) => itm.item)
    : dataWithoutInputFilter;

  return result;
});

const filteredData = computed(() => {
  return (
    filteredDataWithoutPagination.value
      // Pagination
      .slice(skip.value, skip.value + perPage)
  );
});

// Categories (unique entries only)
const allCategories = computed(() => {
  const list: ICategoryItem[] = [];

  data
    .map((itm) => itm.categories)
    .flat()
    .forEach((cat) => {
      const isInList = list.find((itm) => itm.key === cat);

      if (isInList) isInList.count += 1;
      else list.push({ key: cat, name: cat.replace(/-/, " "), count: 1 });
    });

  return list.sort((a, b) => (a.name > b.name ? 1 : -1));
});

//
const isPrevDisabled = computed(() => skip.value === 0);
const isNextDisabled = computed(
  () => skip.value + perPage >= filteredDataWithoutPagination.value.length
);

//
const resetSearchInput = () => {
  searchInput.value = "";
};

//
const resetCategories = () => {
  selectedCategories.value = [];
};

//
const gotoPreviousPage = () => {
  skip.value = Math.max(0, skip.value - perPage);
};

const gotoNextPage = () => {
  skip.value = Math.min(
    filteredDataWithoutPagination.value.length,
    skip.value + perPage
  );
};
</script>
