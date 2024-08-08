import './App.css'
import Page404 from './components/404'
import Cards from './components/cards'
import CardsDescription from './components/cardsDescription'
import Layout from './components/Layout'

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

function App() {

  let route = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={< Layout />}>
            <Route path='*' element={<Page404 />}/>
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
