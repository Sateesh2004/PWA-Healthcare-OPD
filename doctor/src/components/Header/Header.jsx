import React from 'react'
import { ChevronLeft } from 'lucide-react'
import logo from "../../../public/assets/images/logo.webp"
const Header = () => {
  return (
   <div className='flex text-white mh:pr-8  justify-between'>
      <div className='flex items-center'>
        <ChevronLeft className='mh:h-[80px] mh:w-[90px]' />
        <span className='mh:text-[62px] ml-[-15px] mb-[6.5px]'>Back</span>
      </div>
      <div className="mh:mt-8 ">
  <img
    src={logo}
    alt="Logo"
    className="object-contain mh:w-[400px]"
  />
</div>

      
  
    

   </div>
  )
}

export default Header
