import Doctor from "../../components/Cards/Doctor";
import Flow from "../../components/Flow/Flow";
import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import Header from "../../components/Header/Header";
import { CiSearch } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import DoctorCard from "../../components/DoctorCard/doctorCard";
import PatientRegistration from "../../components/PatientRegistration/PatientRegistration";
import { Button } from "../../components/ui/button";
import { FaRegEdit } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { LuClock3 } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FooterS from "../../components/Footer/FooterS";
const Walk8 = () => {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);

    return () => {
      window.removeEventListener("resize", setVh);
    };
  }, []);
  
  
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
     navigate('/walkin9',{state:{appointment}});
    },6000)
    
  },[])
  const location = useLocation();
  const appointment = location.state.appointment;
  
  const date = appointment.date
  
  const formatDate = new Date(date);
    const day = formatDate.getDate(); // 4
    const monthName = formatDate.toLocaleString('en-US', { month: 'short' }); // Jan
    const dayName = formatDate.toLocaleString('en-US', { weekday: 'short' }); // Jan
  return (
    <div className="relative  bg-hero p-3  h-screen bg-cover bg-center" style={{ height: "calc(var(--vh) * 100)" }}>
      <div className={"flex justify-between"}>
          <div onClick={() => navigate(-1)} className="flex hover:cursor-pointer text-white">
            <img
              className="w-3 h-3 mt-1.5 mr-1 mh:w-6 mh:h-9 mh:mr-3"
              src="/images/vector.svg"
            />
            <div className="text-md mh:text-[40px] mh:mt-2"> Back </div>
          </div>
          <img
            className={"w-[14vh] mh:w-[13vh]"}
            src="/images/logo.png"
          />
        </div>
      <div className="" >
      
      <div className="">
          <h1 className="text-[22px] mh:text-[60px] font-dmsans font-semibold text-white">
            {appointment.doctorcategory}
          </h1>
          <div className="relative mh:z-10 ">
            <Flow
              width="w-[210px] mh:w-[760px]" // Dynamically applying Tailwind's responsive width classes
              highlightIndices={[0, 1, 2, 3]}
            />
          </div>
        </div>

      <div className="text-white font-dmsans text-[18px]  mt-1 font-medium mh:text-[40px] mh:px-16 mh:mt-16">
        Payment
      </div>
      <div className="mh:px-0">
        <div className="bg-white relative rounded-lg mt-1 flex flex-col px-2 py-2.5 mh:mt-6 mh:mx-16 mh:rounded-2xl mh:px-5 mh:py-7">
          <div className="absolute top-3 right-3 text-gray-400 text-xl   cursor-pointer mh:top-6 mh:right-6 mh:text-6xl">
            <RxCross2 />
          </div>
          <div className="flex items-center">
            <div className="flex justify-center items-center bg-[linear-gradient(89.99deg,_#084B83_-63.38%,_#16CDE1_124.88%)] rounded-md w-[80px] h-[80px] mh:w-[190px] mh:h-[190px] mh:rounded-2xl">
              <div className="flex flex-col justify-center items-center">
                <div className="font-semibold text-white text-[16px] mh:text-[40px]">
                  {day}
                </div>
                <div className="text-white text-[14px] mh:text-[34px]">{dayName}</div>
                <div className="text-white text-[14px] mh:text-[34px]">
                  {monthName}
                </div>
              </div>
            </div>
            <div className="ml-2 mh:ml-6">
              <div className="text-[10px] font-semibold mh:text-[24px]">
              {appointment.time}
              </div>
              <div className="text-[15px] -mt-1 font-bold mh:text-[32px]">
              {appointment.doctorcategory}
              </div>
              <div className="text-[10px] -mt-0.5 mh:text-[24px] mh:-mt-2">
              {appointment.doctorname}
              </div>
            </div>
          </div>
          <div className="font-dmsans text-[14px] mt-3 font-semibold flex mh:text-[32px] mh:mt-5">
            Please complete your payment in :4 min 30 sec
            
          </div>
          <div className="mh:mt-3 mt-1">
            <div className="bg-gray-400 rounded-[50px] w-full">
              <div
                className="bg-[#16CDE1] rounded-[50px] h-[3px] mh:h-[8px] w-[150px] mh:w-[330px]" // Dynamically apply width classes
              ></div>
            </div>
          </div>
          <div className="font-dmsans text-center text-[14px] font-semibold mt-2 mh:text-[30px] mh:mt-4 mh:mb-3">
            Ammount to pay: ₹499
          </div>
          <div className="flex justify-center">
            <img src="/images/QR Code.svg" className="h-[34vh] mt-2" />
          </div>
          <div className="font-dmsans text-center text-[14px] font-semibold text-gray-300 py-3 mh:text-[30px] mh:py-5">
            Cancel
          </div>
        </div>
      </div>
      </div>

     <FooterS back={true}/>
    </div>
  );
};

export default Walk8;
