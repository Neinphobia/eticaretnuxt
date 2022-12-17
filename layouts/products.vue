<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <NuxtLink to="/products" class="font-bold">FG - Ürünler</NuxtLink>
                
            </nav>
        </header>
        
        <div class="container mx-auto p-4">
            <slot />
        </div>

        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                    <li> <NuxtLink to="/">Ana Sayfa</NuxtLink> </li>
                    <li> <NuxtLink to="/about">Hakkında</NuxtLink> </li>
                    <li> <NuxtLink to="/products">Ürünler</NuxtLink> </li>
                </ul>
        </footer>
    </div>
</template>

<style scoped>
    .router-link-exact-active{
        color: #12b488;
    }

</style>