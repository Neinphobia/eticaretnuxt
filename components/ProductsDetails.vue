<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="product.image" alt="product img" class="mx-auto my-7">

            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7">{{product.title}}</h2>
                <p class="text-xl my-7 ">Fiyatı - $ {{product.price}}</p>
                <p class="mb-4">Türk lirası Karşılığı: <span class="font-bold">{{karsilik}} ₺</span></p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">
                    Ürün ayrıntıları:
                </h3>
                <p class="mb-7">{{product.description}}</p>
                <button class="btn flex">
                    <i class="material-icons mr-2">add_shopping_cart</i>
                    <span>Sepete Ekle</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>


    const {product } = defineProps(['product'])
    const api_url ='https://www.floatrates.com/daily/try.json'
    const {data } = await useFetch(api_url)
    
    let dolar_try = data.value.usd.inverseRate 
    
    let karsilik = product.price * dolar_try
    

</script>

<style  scoped>

    img{
        max-width: 400px;

    }
</style>