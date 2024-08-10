import { useState } from "react"
import { Navigate } from "react-router-dom"

const About = () => {

    const [user, setUser] = useState("This information")

    if(!user) return < Navigate to="/" replace={true}/>

  return (
    <div className="w-2/5 m-auto">
        <h1 className='text-3xl font-semibold'>Hello, This is about us!</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati possimus harum vel perferendis cumque, illum nesciunt corporis, aliquam minima sunt cum dolore quis eius magnam quibusdam fugit natus! Esse, dolores.</p>


        <button onClick={() => setUser("")} className="bg-blue-400 text-white py-2 px-2">Logout</button>

    </div>
  )
}

export default About