<template>
  <header class="w-full block">
    <div class="container mx-auto">
      <div class="wrapper flex items-center mx-auto">
        <nuxt-link class="text-3xl font-bold font-heading" to="/">
          <img src="/assets/images/logo.png">
        </nuxt-link>
        <ul class="flex items-center">
          <li>
            <div class="dropdown">
              KATEGORİLER
              <div class="dropdown-content">
                <div v-for="category in categories"><nuxt-link :to="`/kategori/${category}`">{{ category }}</nuxt-link></div>
              </div>
            </div>
          </li>
          <li>KAMPANYALAR</li>
          <li>İLETİŞİM</li>
        </ul>
        <ul class="flex items-center ml-auto">
          <li>
            <nuxt-link><img src="/assets/images/search-icon.png"></nuxt-link>
          </li>
          <li>
            <nuxt-link to="/sepet"><img src="/assets/images/cart.png"></nuxt-link>
          </li>
          <li>
            <nuxt-link class="login-btn flex items-center" to="/login" v-if="!authenticated">
              <img src="/assets/images/login.png">
              <span>Giriş Yap</span>
            </nuxt-link>
            <nuxt-link class="login-btn flex items-center" @click="logout" v-if="authenticated">
              <img src="/assets/images/login.png">
              <span>Çıkış Yap</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
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