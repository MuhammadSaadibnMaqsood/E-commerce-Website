import './App.css'
import About from './pages/AboutPage'
import Home from './pages/Home'
import Collection from './pages/Collection'
import  Contact  from './pages/Contact'
import AppLayout from './components/AppLayout'
import Myprofile from './pages/myprofile'
import IndividualProduct from './pages/IndividualProduct'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddtoCart from './pages/addtoCart'
import Buy from './pages/Buy'
import AboutPage from './pages/AboutPage'
import { Error } from './components/Error'

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/collection',
        element:<Collection/>
      },
      {
        path:'/about',
        element:<AboutPage/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/myprofile',
        element: <Myprofile/>
      },
      {
        path:'/product/:id',
        element: <IndividualProduct/>
      },
      {
        path:'/addtoCart',
        element: <AddtoCart/>
      },
      {
        path:'/product/buy/:id',
        element: <Buy/>
      },
      {
        path:'*',
        element:<Error/>
      }
      // {
      //   path:'/collection/product/:id',
      //   element: <IndividualProduct/>
      // },
      // {
      //   path:'/product/addtoCart/:id',
      //   element: <AddtoCart/>
      // },
      // {
      //   path:'/product/buy/:id',
      //   element: <Buy/>
      // }
      
    ]
  }])

  return (
    <>
  <RouterProvider router={router}/>
    </>
  )
}

export default App
