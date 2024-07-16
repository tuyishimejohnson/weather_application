const api = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13'
const apiKey = "f56de56508mshd0bfd5041a309a9p1b173djsnd3577aa851d9"

async function getTheData () {
    try {
        const res = await fetch(api + `&appid=${apiKey}`)
        const data = await res.json()
        console.log(data)

    } catch (error) {
        console.log(`${error} is the error.`)
    }
    
}


console.log(getTheData())