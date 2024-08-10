import { useLocation } from "react-router-dom"


const Locations = () => {
    let location = useLocation()
    let append = ""
    let result:any = location.pathname.split("/").filter(item => item !== "").map(item => {
        append += `/${item}`
        return append
    })

  return (
    <div>
        <h1>Hello locations??????????????//</h1>
        <p>Location: {location.pathname}</p>
        <span>Current link is: {result}</span>
    </div>
  )
}

export default Locations