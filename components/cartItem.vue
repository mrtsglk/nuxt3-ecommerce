<template>
          <NuxtLink :to="`/urun/${item.product.id}`"><img :src="item.product.thumbnail" :alt="item.product.title" class="w-full rounded-lg sm:w-40" /></NuxtLink>
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">{{ item.product.title }}</h2>
              <p class="mt-1 text-xs text-gray-700"></p>
            </div>
            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100">
                <span @click="removeFromCart(item.product)" class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <span class="h-8 w-8 border bg-white text-center text-xs outline-none cart-quantity">{{ item.quantity }}</span>
                <span @click="addToCart(item.product)" class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
              </div>
              <div class="flex items-center space-x-4">
                <p class="text-sm">{{ item.product.price }} ₺</p>
              </div>
            </div>
          </div>
  </template>
  <script setup lang="ts">
  defineProps({
    item: {
      type: Object as PropType<CartItem>,
      required: true,
    },
  });
  
  const { removeFromCart, addToCart } = useCart();
  </script>