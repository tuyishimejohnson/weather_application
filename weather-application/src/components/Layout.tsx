import { NavLink, Outlet } from 'react-router-dom'
import Locations from './locations'

const Layout = () => {

  interface Styles {
      backgroundColor: string,
      color: string,
      paddingInline:string,
      paddingBlock:string
  }


  let styles: Styles = {
        backgroundColor: "brown",
        color:"white",
        paddingInline:"2em",
        paddingBlock:"0.5em"
  }

  return (
    <div>
      <nav className= "w-2/5 m-auto text-center">
          <NavLink to="/Cards" style={({isActive}) => isActive ? styles : undefined}>Navigate to Cards</NavLink>
          <NavLink to="/DisplayData">Display data</NavLink>
          
      </nav>
  
      <main>
       <Locations />
        <Outlet />
      </main>
      
    </div>
  )
}

export default Layout