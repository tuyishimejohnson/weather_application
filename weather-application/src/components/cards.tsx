import { useState } from "react"
import data from "./data"
import { NavLink, useSearchParams } from "react-router-dom"


let result = data.map(char => (
    <div key={char.id} className="flex flex-col">
        <NavLink to={`/Cards/${char.id}`}>
            <img src={char.imagePath} className="h-56 w-72 object-cover bg-black shadow-gray-300 shadow-md rounded-md" alt="Images devices" />
            <h1 className="text-2xl font-bold">{char.title}</h1>
            <span className={`${char.category.toLowerCase() === "cheap" ? "bg-gray-600 py-1 px-2 rounded text-white" : "bg-green-500 py-1 px-2 rounded text-white"}`}>{char.category}</span>
            <p>{char.description}</p>
        </NavLink>
    </div>
))



const Cards = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [data, setData] = useState([])
    const typeFilter = searchParams.get("type")
    console.log(typeFilter)

  return (

    <div className="w-2/5 m-auto">
        <h1 className="flex justify-center text-3xl font-semibold">These are the cards</h1>
        <div className=" grid grid-cols-2 gap-5 px-3 py-5 border border-gray-200">
            { result }
        </div>
    </div>
  )
}

export default Cards