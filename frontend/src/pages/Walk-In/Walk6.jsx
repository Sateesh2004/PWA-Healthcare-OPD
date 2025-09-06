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
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import FooterS from "../../components/Footer/FooterS";
const Walk6 = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    const appid = appointment.appid
    navigate('/walkin7',{state:{appid,appointment}});
  }
  const location = useLocation();
  const [date, setDate] = useState("");
  console.log(date)
  const formatDate = new Date(date);
    const day = formatDate.getDate(); // 4
    const monthName = formatDate.toLocaleString('en-US', { month: 'short' }); 
    const dayName = formatDate.toLocaleString('en-US', { weekday: 'short' }); 
  
  const [appointment, setAppointment] = useState({
     
  })


  useEffect(() => {
    const fetchData = async () => {
      const patientId = location.state.patientId
      console.log(patientId)
      const respponse = await fetch(`https://pwa-healthcare-opd-12.onrender.com/appointment/${patientId}`)
      const data = await respponse.json()
      
      setAppointment(data)
      setDate(data.date)
      
    }
    fetchData()
  }, [])
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

      <div className="text-white   font-dmsans text-[18px]  mt-6 font-medium mh:text-[40px]  mh:mt-16">
        Confirm Appointment Details
      </div>
      <div className=" mh:px-0">
        <div className="bg-white relative rounded-lg mt-3 flex flex-col px-2 py-2.5 mh:mt-6 mh:mx-16 mh:rounded-2xl mh:px-5 mh:py-7">
          <div className="absolute top-3 right-3 text-gray-400 text-lg cursor-pointer mh:top-6 mh:right-6 mh:text-6xl">
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

          <div className="flex mt-7 text-sm font-bold mh:text-[36px] mh:mt-[3.5vh] mh:mb-6 font-dmsans">
            Appointment Details
          </div>

          <div className="mt-2  text-[10px] text-gray-800 mh:text-[28px] mh:mt-3 font-dmsans">
            <div className="flex justify-between">
              <p className="w-[50%]">
                <strong>Patient Name:</strong> {appointment.patientName}
              </p>
              <p className="ml-3 w-[50%] mh:ml-[1vh] mh:pl-0.5">
                <strong>Doctor Name:</strong> {appointment.doctorname}
              </p>
            </div>
            <div className="flex  justify-between">
              <p className="w-[50%] ">
                <strong>Patient ID:</strong> {appointment.patientId}
              </p>
              <p className="ml-3 w-[50%] mh:ml-[1vh] mh:pl-0.5">
                <strong>Appointment Date:</strong> {appointment.date}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="w-[50%]">
                <strong>Phone No:</strong> {appointment.patientPhone}
              </p>
              <p className="ml-3 w-[50%] mh:ml-[1vh] mh:pl-0.5">
                <strong>Appointment Time:</strong> {appointment.time}
              </p>
            </div>
          </div>

          <div className="mt-4 mh:mt-8 font-dmsans">
            <p className="font-bold text-sm text-gray-800 mh:text-[36px]">
              Reason of Visit:
            </p>
            <p className="text-xs -mt-0.5 text-gray-800 mh:text-[28px] mh:mt-5">
              <span>Genral Check-up </span>
            </p>
          </div>

          <div className="mt-4 mh:mt-8 font-dmsans">
            <div className="font-bold text-sm text-gray-800 mh:text-[36px]">
              Payment Status: <span className="text-customRed">{appointment.paymentstatus}</span>
            </div>
            <p className="text-xs text-gray-800 mh:text-[28px] mh:mt-4">
              <span>PAID:</span> ₹0
            </p>
            <p className="text-xs -mt-0.5 text-gray-800 mh:text-[28px] mh:mt-3">
              Pending <span className="text-customRed">₹499</span>
            </p>
          </div>

          <button onClick={handleNavigation} className="mt-6 py-2  hover:cursor-pointer text-white bg-customBlue text-[14px] rounded-md w-full mh:text-[30px] mh:py-4 mh:mt-16 font-dmsans">
            Confirm and pay  
          </button>
        </div>
      </div>
      </div>

    
      <FooterS back={true}/>
    </div>
  );
};

export default Walk6;
