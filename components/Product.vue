<template>
    <div class="w-full block">
      
        <div class="product-thumbnail">
          <NuxtLink :to="`/urun/${product.id}`">
            <img class="cover" :src="product.thumbnail" :alt="product.title" />
          </NuxtLink>
          <button @click="handleAddToCart(product)" class="flex items-center justify-center">
            <img src="/assets/images/shopping-cart.png" />
            Sepete Ekle
          </button>
        </div>
      <div class="product-content">
        <h2 class="product-title"> <NuxtLink :to="`/urun/${product.id}`">{{ product.title }}</NuxtLink></h2>
        <p class="product-description">{{ product.description }}</p>
        <span class="product-price">{{ product.price }} ₺</span>
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