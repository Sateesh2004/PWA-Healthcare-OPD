import Doctor from "../../components/Cards/Doctor";
import Flow from "../../components/Flow/Flow";
import React from "react";
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
const Walk9 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const appointment = location.state.appointment;
  const date = appointment.date;
  const formatDate = new Date(date);
    const day = formatDate.getDate(); // 4
    const monthName = formatDate.toLocaleString('en-US', { month: 'short' }); // Jan
    const dayName = formatDate.toLocaleString('en-US', { weekday: 'short' }); // Jan
  return (
    <div className=" bg-hero bg-cover  bg-center h-screen ">
    <div className={"flex justify-between  pt-4 mh:mx-16"}>
       <div onClick={() => navigate(-1)} className="flex hover:cursor-pointer text-white mh:mt-6">
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
      <div className=" mh:mx-16">
          <h1 className="text-[22px] mh:text-[60px] font-dmsans font-semibold text-white">
          {appointment.doctorcategory}
          </h1>
          <div className="relative mh:z-10 ">
            <Flow
              width="w-[210px] mh:w-[760px]" // Dynamically applying Tailwind's responsive width classes
              highlightIndices={[0, 1, 2, 3,4]}
            />
          </div>
        </div>

      <div className="text-white font-dmsans text-[18px] px-16 mt-6 font-medium mh:text-[40px] mh:mt-4">
        Payment
      </div>
      <div className="px-6 mh:px-0">
        <div className="bg-white relative rounded-lg mt-3 mh:mt-0 flex flex-col px-2 py-2.5 mh:mx-16 mh:rounded-2xl mh:px-5 mh:py-7">
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
          <div className="justify-center font-dmsans text-[22px] mt-3 font-semibold flex mh:text-[48px] mh:mt-5">
            Payment Complete
          </div>
          <div className="font-dmsans text-center text-[14px] font-semibold mh:text-[30px] mh:mt-2 mh:mb-3">
            Ammount PAID: 499
          </div>
          <div className="flex justify-center">
            <img
              src="./assets/images/paymentComplete.webp"
              className="h-[36vh] mt-2"
            />
          </div>
          <div className="mh:-mt-4">
            <button onClick={() => navigate("/checkin5",{state:{appointment}})} className="mt-6 py-2 text-white bg-customBlue text-[14px] rounded-md w-full mh:text-[30px] mh:py-4 mh:mt-16 font-dmsans">
              Next
            </button>
          </div>
        </div>
      </div>

      <FooterS back={true}/>
    </div>
  );
};

export default Walk9;
