<template>
    <div class="bg-gradient-to-r from-yellow-100 to-blue-200">
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Furkan Gönülal - Fake Ürün</NuxtLink>
                <ul class="flex gap-4">
                    <li> <NuxtLink to="/">Ana Sayfa</NuxtLink> </li>
                    <li> <NuxtLink to="/about" class="text-[#2C2F33]">Hakkında</NuxtLink> </li>
                    <li> <NuxtLink to="/products" class="btn">Ürünler</NuxtLink> </li>
                </ul>
            </nav>
        </header>
        
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<style scoped>
    .router-link-exact-active{
        color: #12b488;
    }
    a{
        color: blanchedalmond;
    }

</style>