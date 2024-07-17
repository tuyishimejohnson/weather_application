
/* const city = document.getElementById("city").value
const searchBtn = document.getElementById("search")
const section = document.getElementById("section")
 */


const api = "https://www.healthcare.gov/api/index.json";



async function getTheData() {

    try {
        const res = await fetch(api)
        const data = await res.json()
        console.log(data)
        /* let newEle = document.createElement("p")
        newEle.textContent = JSON.stringify(data)
        section.appendChild(newEle) */

    } catch (error) {
        console.log(`${error} is the error.`)
    }
    
}


getTheData()


/* searchBtn.addEventListener("click", () => {
    getTheData()
})
 */





