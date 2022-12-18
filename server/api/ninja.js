export default defineEventHandler(async (event)=>{


    //handle  query params
    //useQuery get query olmuş
    // const { name } = getQuery(event)
    
    // //hande post data
    // //useBody readbody olmş
    // const { age } = await readBody(event)


    //api call with private key

    const { data } = await $fetch('http://www.floatrates.com/daily/try.json')
    console.log(data)
    return data

})

