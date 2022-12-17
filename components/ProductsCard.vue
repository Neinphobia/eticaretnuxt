<template>
    <div class="card text-center">
        <img :src="product.image" alt="Product thumb" class="thumb hover:opacity-50">
        <p class="font-bold text-gray-500 m-4 truncate"> {{product.title}}</p>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn my-4 hover:bg-gradient-to-r from-yellow-100 to-blue-90">Detaylar</p>
            <p class="my-4 font-bold bg-gradient-to-r from-yellow-120 to-blue-300 p-2 rounded-md">{{product.category}}</p>
            <p class="pricetag my-4 bg-gray-700">{{product.price}} $</p>
        </NuxtLink>
    </div>
</template>

<script setup>

    const { product } = defineProps(['product'])
</script>

<style  scoped>

    .thumb{
        max-height: 120px;
        max-width: 70%;
        margin: 0 auto;
    }
</style>