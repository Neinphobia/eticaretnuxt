<template>
    <div class="bg-gradient-to-r from-yellow-50 to-blue-300">
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductsCard :product="p"/>
              
            </div>

        </div>
    
    </div>
</template>

<script setup>

definePageMeta({
    layout: 'products'
})
 //fetch the productss.
 const { data: products } = await useFetch('https://fakestoreapi.com/products')
 

</script>
<style scoped>


</style>