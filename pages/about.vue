<template class="bg-gradient-to-r from-yellow-50 to-blue-300">
    <div>
        <h2>Hakkında</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur velit nihil? Voluptate facere quas itaque culpa officia laborum commodi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur velit nihil? Voluptate facere quas itaque culpa officia laborum commodi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur velit nihil? Voluptate facere quas itaque culpa officia laborum commodi?</p>
        
        <div>Bir dolar: {{dolar_try}} Türk lirasıdır.</div>
    </div>
</template>

<script setup>
let dolar_
const api_url ='http://www.floatrates.com/daily/try.json'
let dolarkuru = await fetch(api_url)
dolar_=await dolarkuru.json()
const dolar_try = dolar_.usd.inverseRate



</script>

<style scoped>
    h2{
        margin-bottom: 20px;
        font-size: 20px;
    }
    p{
        margin: 20px 0;
    }
    a{
        font-weight: bolder;
        color: bisque;
    }
</style>