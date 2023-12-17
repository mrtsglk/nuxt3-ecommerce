<template>
    <div class="breadcrumb mb-50">
      <div class="container mx-auto">
        <div class="wrapper mx-auto">
          <h1>Sepetim</h1>
        </div>
      </div>
    </div>
    <div class="flex bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700 mx-auto alert-box" role="alert" v-if="items.items.length <= 0">
          <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
          <div>
              Sepetinizde ürün bulunmamaktadır.
          </div>
      </div>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3">
        <div v-for="item in items.items.value" :key="item.product.id" class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <CartItem :item="item" />
        </div>
      </div>
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3" v-if="items.items.value.length > 0">
        <div class="flex justify-between">
          <p class="text-lg font-bold">Toplam</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">{{ items.items.value.reduce((acc, item) => acc + item.product.price * item.quantity, 0) }} ₺</p>
          </div>
        </div>
        <button class="payment-btn">Ödeme Yap</button>
      </div>
    </div>
</template>
<script setup lang="ts">

useSeoMeta({
  title: 'Sepet | Nuxt 3 E-commerce',
  description: 'Açıklama alanı',
})

import { useCart } from '../composables/useCart';

const items = useCart();

  
</script>