const api = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13'


async function getTheData () {
    try {
        const res = await fetch(api)
        const data = await res.json()
        console.log(data)

    } catch (error) {
        console.log(`${error} is the error.`)
    }
    
}


console.log(getTheData())