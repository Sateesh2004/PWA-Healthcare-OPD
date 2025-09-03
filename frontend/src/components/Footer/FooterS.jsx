import React from 'react'
import { useNavigate } from 'react-router-dom';
const FooterS = (props) => {
    console.log(props)
    const navigate = useNavigate();
  return (
    <div className="mx-8 fixed bottom-6 left-0 right-0   block "> 
      <div className='flex   justify-between  items-end w-full'>
    <div className="">
      <div
      onClick={() => navigate("/")}
        className={ 
          `flex ${props.back?"visible":"invisible"}  justify-center items-center p-2 bg-[#fff] text-white rounded font-semibold text-sm w-[14vh] h-[5vh]  bg-customBlue border border-customGray mh:text-3xl mh:rounded-xl `
        }
      >
        Back to start
      </div>
    </div>
    <div className={"h-[20px] w-[100px]"}>
      <img className="" src="./assets/images/footer.webp" />
    </div>
    </div>
  </div>
  )
}

export default FooterS
