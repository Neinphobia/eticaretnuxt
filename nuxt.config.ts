// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 modules: ['@nuxtjs/tailwindcss'],
 app: {
    head:{
        title: 'Furkan Gönülal - Site',
        meta:[
            {name: 'description', content: 'Nuxt 3 hakındaki her şey'}

        ],
        link:[
            { rel: 'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
        ]
    }
 },
  runtimeConfig:{
    currencyKey:process.env.CURRENCY_API_KEY
  }
})
