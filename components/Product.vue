<template>
    <div class="w-full block">
      <div class="product-thumbnail">
        <img :src="product.thumbnail" :alt="product.title" />
      </div>
      <div class="product-content">
        <h2 class="product-title">{{ product.title }}</h2>
        <p class="product-description">{{ product.description }}</p>
        <span class="product-price">{{ product.price }} ₺</span>
        <div class="product-actions flex items-center">
          <button @click="handleAddToCart(product)" class="btn btn--alt">
            Sepete Ekle
          </button>
          <NuxtLink :to="`/urun/${product.id}`">İncele</NuxtLink>
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">
import { useToast } from "vue-toastification";
const toast = useToast();
const { addToCart } = useCart();

defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  },
});

const handleAddToCart = (product: Product) => {
  addToCart(product);
  toast.success(`${product.title} ürününü sepete eklediniz.`);
};
</script>