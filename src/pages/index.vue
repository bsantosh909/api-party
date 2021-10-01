<template>
  <div class="container">
    <div align="center" class="mb-20">
      <img
        src="@/assets/image/logo.png"
        alt="API party logo"
        class="w-52 h-52"
      />
      <span class="italic"> The awesome API collection! </span>
    </div>
    <div class="text-center">
      <p class="my-5">
        If you are wondering what is it all about, then this is an a small
        project built to list the awesome API created by hundres of users and
        companies around the world.
      </p>
      <p class="my-5">
        Everyone loves to use awesome API in their personal/professional
        project. That is why we introduce
        <b>API Party!</b>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
