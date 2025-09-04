import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'  
import "@fontsource/dm-sans";
import HomePage from './pages/HomePage';
import Login from './pages/Login';



const App = () => {


  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/login",
      element:<Login/>
    }
    
  ])
  return (
    <>
            <RouterProvider router={router} />

    </>
  );
}

export default App
