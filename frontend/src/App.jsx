import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'  

import { Button } from './components/ui/button'
import "@fontsource/dm-sans";
import Screen1 from './pages/screen1'

import CheckIn1 from './pages/Check-In/checkIn1'
import CheckIn1a from './pages/Check-In/checkIn1a'
import CheckIn2 from './pages/Check-In/checkIn2'
import CheckIn3 from './pages/Check-In/checkIn3'
import CheckIn4 from './pages/Check-In/checkIn4'
import CheckIn5 from './pages/Check-In/checkIn5'
import CheckIn6 from './pages/Check-In/checkIn6'
import Screen2 from './pages/screen2'
import WalkIn1 from './pages/Walk-In/Walk1'
import WalkIn2 from './pages/Walk-In/Walk2'
import WalkIn3 from './pages/Walk-In/Walk3'
import WalkIn4 from './pages/Walk-In/Walk4'
import Edit from './pages/Walk-In/Edit'
import WalkIn4a from './pages/Walk-In/Walk4a'
import WalkIn5 from './pages/Walk-In/Walk5'
import WalkIn6 from './pages/Walk-In/Walk6'
import WalkIn7 from './pages/Walk-In/Walk7'
import WalkIn8 from './pages/Walk-In/Walk8'
import WalkIn9 from './pages/Walk-In/Walk9'


import Walk4a from './pages/Walk-In/Walk4a'

const App = () => {


  const router = createBrowserRouter([
    {
      path:"/",
      element:<Screen1/>
    },
    ,
    {
      path:"/screen2",
      element:<Screen2/>
    }
    ,
    {
      path:"/walkin1",
      element:<WalkIn1/>
    }
    ,
    {
      path:"/walkin2",
      element:<WalkIn2/>
    }
    ,
    {
      path:"/walkin3",
      element:<WalkIn3/>
    }
    ,
    {
      path:"/walkin4a",
      element:<WalkIn4a/>
    }
    ,
    {
      path:"/walkin4",
      element:<WalkIn4/>
    }
    ,
    {
      path:"/walkin5",
      element:<WalkIn5/>
    }
    ,
    {
      path:"/edit",
      element:<Edit/>
    }
    ,
    ,
    {
      path:"/apointment",
      element:<WalkIn6/>
    }
    ,
    {
      path:"/walkin7",
      element:<WalkIn7/>
    },
    {
      path:"/walkin8",
      element:<WalkIn8/>
    },
    {
      path:"/walkin9",
      element:<WalkIn9/>
    },
    {
      path:"/checkin5",
      element:<CheckIn5/>
    },
    {
      path:"/checkin1",
      element:<CheckIn1/>
    },
    {
      path:"/checkin2",
      element:<CheckIn2/>
    },
    {
      path:"/checkin3",
      element:<CheckIn3/>
    },
    {
      path:"/checkin4",
      element:<CheckIn4/>
    },
    {
      path:"/checkin6",
      element:<CheckIn6/>
    },
  ])
  return (
    <>
            <RouterProvider router={router} />

    </>
  );
}

export default App
