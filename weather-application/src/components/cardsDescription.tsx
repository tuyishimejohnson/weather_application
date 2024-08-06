import { useEffect, useState } from "react"
import data, {Description} from "./data"
import { useParams } from "react-router-dom"


const CardsDescription = () => {

    const { id } = useParams()
    const [x, setX] = useState<Description>()

    useEffect(() => {
        id ? setX(data.find(item => item.id === parseInt(id))) : undefined
    }, [id])
  return (

    <>
    
        <div className="w-2/5 m-auto">
            <h1 className='text-3xl font-bold bg-slate-500 text-white flex justify-center'>This is the card description</h1>
        </div>


            {x && <div className="w-2/5 m-auto">
                    <img src={x.imagePath} className="" alt="Images devices" />
                    <h1 className="text-2xl font-bold">{x.title}</h1>
                    <p>{x.description}</p>
            </div>}
        
    </>
  )
}

export default CardsDescription