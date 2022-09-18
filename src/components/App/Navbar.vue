<template>
  <nav class="sticky top-0 z-10 bg-gray-200 dark:bg-cyan-800">
    <div class="w-full py-2 px-4 shadow">
      <div class="relative flex justify-between pr-10">
        <NuxtLink to="/">
          <NuxtImg
            src="/images/logo2.png"
            height="48"
            class="h-12"
            format="webp"
          />
        </NuxtLink>

        <div class="hidden md:flex my-auto">
          <NuxtLink
            v-for="route of routes"
            :key="route.id"
            :to="route.path"
            class="p-2 mx-2 text-center border border-gray-200 dark:border-cyan-800 hover:bg-gray-400 dark:hover:bg-cyan-700 hover:shadow-lg rounded flex gap-x-2"
            active-class="bg-gray-300 border-gray-400 dark:bg-cyan-900 dark:border-cyan-700 rounded "
          >
            <div class="my-auto">
              <div v-if="route.id === 'collection'">
                <IconsList width="24" height="24" />
              </div>
              <div v-if="route.id === 'wiki'">
                <IconsWiki width="24" height="24" />
              </div>
            </div>

            <span>
              {{ route.name }}
            </span>
          </NuxtLink>
        </div>

        <div
          class="absolute right-0 h-full flex items-center cursor-pointer"
          @click="changeTheme"
        >
          <div
            class="w-7 h-7 flex justify-center items-center rounded-full hover:bg-gray-300 dark:hover:bg-cyan-700"
          >
            <ColorScheme placeholder="">
              <IconsDarkMode
                v-if="colorMode.value === 'dark'"
                width="24"
                height="24"
                v-motion-fade
              />

              <IconsLightMode v-else width="24" height="24" v-motion-fade />
            </ColorScheme>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
interface INavbarProps {
  routes: any[];
}
defineProps<INavbarProps>();

//
const colorMode = useColorMode();

//
const changeTheme = (e: Event) => {
  colorMode.preference = colorMode.value === "light" ? "dark" : "light";
};
</script>
