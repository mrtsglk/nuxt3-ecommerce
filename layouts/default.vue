<template>
    <div>
      <Header />
      <main class="w-full block">
        <slot />
      </main>
      <Footer />
    </div>
  </template>
  <script lang="ts" setup>
  import "vue-toastification/dist/index.css";
  </script>