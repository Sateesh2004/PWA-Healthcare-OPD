import React from 'react'
import frame  from "../../assets/images/frame-1000004195.svg"
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex  w-full   justify-between mh:-mt-9">
    <div className="mh:ml-16">
      <div onClick={() => navigate(-1)}
        className={
          "p-2 bg-[#fff] text-white hover:cursor-pointer rounded font-semibold text-sm flex w-[14vh] h-[5vh] mt-[28vh] bg-customBlue justify-center items-center ml-11 border border-customGray mh:text-3xl mh:rounded-xl"
        }
      >
        Back to start
      </div>
    </div>
    <div className={"flex mt-[31vh] mr-12 mh:mr-24"}>
      <img className="w-[12vh]" src="./assets/images/footer.webp" />
    </div>
  </div>
  )
}

export default Footer
