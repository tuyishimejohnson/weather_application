const api = 'https://open-weather13.p.rapidapi.com/city/Kigali/EN'
const options = {
    method: "GET",
    headers: {
        'x-rapidapi-key': 'f56de56508mshd0bfd5041a309a9p1b173djsnd3577aa851d9',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    }
}

async function getTheData () {

    try {
        const res = await fetch(api, options)
        const data = await res.json()
        console.log(data)

    } catch (error) {
        console.log(`${error} is the error.`)
    }
    
}

getTheData()

const searchInput = document.getElementById("city")
const searchBtn = document.getElementById("search")