<template>
   <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
    <div class="flex flex-col md:flex-row -mx-4">
      <div class="md:flex-1 px-4">
        <img :src="product.thumbnail" :alt="product.title" />
      </div>
      <div class="md:flex-1 px-4">
        <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{{ product.title }}</h2>
        <p class="text-gray-500 text-sm"><nuxt-link :to="`/kategori/${product.category}`" class="text-indigo-600 hover:underline">{{ product.category }}</nuxt-link></p>

        <div class="flex items-center space-x-4 my-4">
          <div>
            <div class="rounded-lg bg-gray-100 flex py-2 px-3">
              <span class="font-bold text-indigo-600 text-3xl">{{ product.price }} ₺</span>
            </div>
          </div>
        </div>

        <p class="text-gray-500">{{ product.description }}</p>

        <div class="flex py-4 space-x-4">
          <button @click="handleAddToCart(product)" type="button" class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  </div>

  </template>
  <script setup lang="ts">
  import { useToast } from "vue-toastification";
const toast = useToast();
  const route = useRoute();
  const { addToCart } = useCart();
  const id = route.params.id;
  
  const { data } = await useFetch(`/api/getProduct?id=${id}`);
  const product = data.value as Product;
  
  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.title} ürününü sepete eklediniz.`);
  };
  </script>