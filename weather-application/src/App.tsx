import './App.css'
import Cards from './components/cards'
import CardsDescription from './components/cardsDescription'
import Layout from './components/Layout'

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

function App() {

  let route = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={< Layout />}>
            <Route path='Cards' element={< Cards />}/>
            <Route path='Cards/:id' element={< CardsDescription />}/>
        </Route>
    )

  )
  
  return (
    <>
      <div>
        <RouterProvider router={route} />
      </div>
    </>
  )
}

export default App
