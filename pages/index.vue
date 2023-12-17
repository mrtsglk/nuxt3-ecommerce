<template>
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

useSeoMeta({
  title: 'Anasayfa | Nuxt 3 E-commerce',
  description: 'Açıklama alanı',
})

interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
const { products }: ProductResponse = await $fetch("/api/getProducts");
</script>