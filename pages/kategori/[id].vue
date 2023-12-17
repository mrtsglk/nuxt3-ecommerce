<template>
    <div class="breadcrumb">
      <div class="container mx-auto">
        <div class="wrapper mx-auto">
          <h1>{{ route.params.id }}</h1>
        </div>
      </div>
    </div>
    <section id="products" class="w-full block">
      <div class="container mx-auto">
        <div class="wrapper grid grid-cols-4 gap-8 mx-auto">
          <div
          v-for="product in products"
          :key="product.id"
          class="product-item"
        >
          <Product :product="product" />
        </div>
        </div>
      </div>
    </section>
  </template>
  <script lang="ts" setup>
  const route = useRoute();
  const id = route.params.id;

  useSeoMeta({
    title: route.params.id+' | Nuxt 3 Ecommerce',
    description: 'Açıklama alanı',
  })

  interface ProductResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }

  
  const { products }: ProductResponse = await $fetch(`/api/getCategory?id=${id}`);
  
  </script>