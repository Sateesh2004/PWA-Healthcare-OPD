import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import FooterS from '../components/Footer/FooterS';
const Screen2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state)
  return (
    <div className="bg-hero  h-screen bg-cover bg-center">
      <div className='mh:mx-16'>
      <div className=" ">
        
        
<div className={"flex   justify-between  pt-4 mh:mx-16"}>
          <div onClick={() => navigate(-1)} className="flex ml-8 hover:cursor-pointer text-white mh:mt-6">
            <img
              className="w-3 h-4 mt-1.5 mr-1 mh:w-6 mh:h-9 mh:mr-3"
              src="./assets/images/vector.webp"
            />
            <div className="text-lg mh:text-[40px] mh:mt-2"> Back </div>
          </div>
          <img
            className={"w-[14vh] mr-4 mh:w-[13vh] mh:mt-4"}
            src="./assets/images/logo.webp"
          />
        </div>







        </div>




         <div className="flex flex-col  justify-center items-center mt-4 sm:mt-12">
       <img src="/images/combined_logo.png" alt="" className="transform scale-50" />
      </div>
     
      <div
        className={
          "flex flex-col items-center justify-center mh:mt-[6vh] mh:gap-8"
        }
      >
        <div onClick={() => navigate("/checkin1")}
          className={
            "p-2 bg-[#fff] text-white border rounded-md font-semibold flex flex-col w-[80vw] mt-10 bg-gradient-to-r from-customBlue to-customCyan    -customGray mh:w-[80vw] mh:h-[9vh] mh:text-5xl mh:p-8"
          }
        >
          Check-in
          <span className={"text-xs font-normal mh:text-2xl mh:mt-5"}>
            I have an Appointment
          </span>
        </div>
       
        <div
        onClick={()=>{navigate("/walkin1")}}
          className={
            "p-2 bg-[#fff] border text-white rounded-md font-semibold flex flex-col w-[80vw] mt-10 bg-gradient-to-r from-customBlue to-customCyan    - -customGray mh:w-[80vw] mh:h-[9vh] mh:text-5xl mh:p-8"
          }
        >
          <p> Walk-in</p>
         
          <span className={"text-xs  font-normal mh:text-2xl mh:mt-5"}>
            I Don't have an Appointment
          </span>
        </div>
          
      </div>
    </div>
      <FooterS back={true}/>
    </div>
  );
};

export default Screen2;
