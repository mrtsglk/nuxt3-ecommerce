<template>
  <header class="w-full block">
  <section class="relative mx-auto">
    <nav class="flex justify-between bg-gray-900 text-white w-screen">
      <div class="px-5 xl:px-12 py-6 flex w-full items-center">
        <nuxt-link class="text-3xl font-bold font-heading" to="/">
          NuxtJS
        </nuxt-link>
        <ul class="hidden md:flex px-4 font-semibold font-heading space-x-12 ml-auto">
          <li>
            <div class="dropdown">
              <button class="dropbtn">Kategoriler</button>
              <div class="dropdown-content">
                <div v-for="category in categories"><nuxt-link class="hover:text-gray-200" :to="`/kategori/${category}`">{{ category }}</nuxt-link></div>
              </div>
            </div>
          </li>
          <li><nuxt-link class="hover:text-gray-200" to="/sepet">Sepetim</nuxt-link></li>
          <li v-if="!authenticated"><nuxt-link class="hover:text-gray-200" to="/login">Üye Girişi</nuxt-link></li>
          <li v-if="authenticated"><nuxt-link class="hover:text-gray-200" @click="logout">Çıkış Yap</nuxt-link></li>
        </ul>
      </div>
    </nav>
  </section>
  </header>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';

const categories = await $fetch("/api/getCategories");

const router = useRouter();

const { logUserOut } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());

const logout = () => {
  logUserOut();
  router.push('/login');
};
</script>