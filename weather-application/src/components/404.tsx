
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className='w-2/5 m-auto text-2xl'>
        <h1>Page not found you can go back by clicking</h1> 
        <Link to={"/"}>Here</Link>
    </div>
  )
}

export default Page404