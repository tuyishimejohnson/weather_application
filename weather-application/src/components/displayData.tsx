import { useLoaderData, Link } from "react-router-dom"

const DisplayData = () => {
    const storedData:any = useLoaderData()
    const result = storedData.map((item: { id: number, title:string, completed:boolean }) => (
        <Link to="/" key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.completed}</span>
        </Link>
    ))

  return (
    <div>
        <h1 className="text-2xl">Johnson tuyishime</h1>

        {result}
    </div>
  )
}

export default DisplayData