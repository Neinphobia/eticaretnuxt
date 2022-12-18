export default defineEventHandler(async (event)=>{

    const {code } =  event.context.params
    const { currencyKey } =useRuntimeConfig()

   // const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=${code}`
    //  const uri = `https://anyapi.io/api/v1/exchange/convert?apiKey=${currencyKey}&base=USD&to=${code}&amount=1000`  

    const { data } = await $fetch('http://www.floatrates.com/daily/try.json')

    
    
    return data
})