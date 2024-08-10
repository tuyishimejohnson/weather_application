import { useLoaderData, Link } from "react-router-dom"

const DisplayData = () => {
    
    const storedData:any = useLoaderData()
    const result = storedData.map((item: { id: number, title:string, completed:boolean }) => (
        
        <Link to="/" key={item.id}>
            <h1>{item.title}</h1>
            <p className="text-2xl">{item.completed ? "True" : "False"}</p>
        </Link>
    ))

  return (
    <div  className="w-2/5 m-auto">
        <h1 className="text-2xl">Johnson Tuyishime</h1>
        {result}
    </div>
  )
}

export default DisplayData