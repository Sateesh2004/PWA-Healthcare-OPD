import React, { useEffect } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import Carousel from "../../components/Carousel/carousel";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import FooterS from "../../components/Footer/FooterS";
const API_URL = import.meta.env.VITE_API_URL; 
// import { useNavigate } from "react-router-dom";
const CheckIn3 = () => {
  const navigate = useNavigate();
  const [appointments,setAppointments]=useState([{}])
  
  const location = useLocation();
  const id = location.state.values.id
  const [date,setDate]=useState('')


  const formatDate = new Date(date);
  const day = formatDate.getDate(); // 4
  const monthName = formatDate.toLocaleString('en-US', { month: 'short' }); 
  const dayName = formatDate.toLocaleString('en-US', { weekday: 'short' }); 
  console.log(formatDate)
  console.log(day,monthName,dayName)
  
  



  useEffect(() => {
    const fetchData =async()=>{
      const response =await  fetch(`${API_URL}/appointment/appointments/${id}`)
      const data = await response.json()
      setAppointments(data)
      console.log(data)
      
      
      const date = data[0].date
      setDate(date) 
      console.log(date)
      
      


    }
    fetchData()
  },[])


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

     

      <div className="mt-4  mh:mr-[5vh] mh:mt-8">
        <Carousel className="mh:rounded-3xl" />
      </div>

      <div className="text-white font-semibold mt-6  text-lg mh:text-[40px] mh:mt-20 ">
        Upcoming appointments
      </div>
      <div className="text-white -mt-1 text-[17px]  mh:mt-1 mh:text-[40px]">
        Today
      </div>

      <div className="bg-white  rounded-md mt-2 flex mh:ml-20 mh:mr-24 mh:rounded-2xl">
        <div className="flex  justify-start items-start px-2 pt-1 pb-1.5 mt-1 mh:p-4">
          <div className="flex justify-center items-center bg-customBlue rounded-md w-[80px] h-[80px] mh:w-[180px] mh:h-[180px]  mh:rounded-2xl">
            <div className="flex flex-col justify-center items-center">
              <div className="font-semibold text-white text-[16px] mh:text-[32px]">
               {day}
              </div>
              <div className="text-white text-[14px] mh:text-[30px]">{dayName}</div>
              <div className="text-white text-[14px] mh:text-[30px]">{monthName}</div>
            </div>
          </div>
        </div>
        <div className="w-full pr-2" >
          <div className="flex flex-col mt-2 items-start mh:rounded-2xl mh:ml-2 mh:mt-6">
            <div className="text-[10px] font-semibold mh:text-[22px]">
               {appointments[0].time}
            </div>
            <div className="text-[14px] font-bold mh:text-[30px] w-full">
               {appointments[0].doctorcategory}
            </div>
            <div className="text-[9px] -mt-0.5 mh:text-[22px] mh:-mt-2">
               {appointments[0].doctorname}
            </div>
            <div className="w-full mr-2 -mb-8 mt-3  mh:mt-7">
              <div onClick={() => navigate("/checkIn4",{state:{appointment:appointments[0]}})} className="flex justify-center items-center p-0.5 rounded-sm text-[11px] bg-customBlue text-white mh:text-[22px] mh:h-11 mh:rounded-lg">
                Appointment Details
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white mh:ml-6 mt-3 text-[17px]  mh:text-[40px] mh:mt-8 mh:mb-4">
        Next week
      </div>

<div className="overflow-y-auto max-h-[350px]" >
{appointments.slice(1).map((appointment) => (
  <div className="bg-white   rounded-md mt-2 flex mh:ml-20 mh:mr-24 mh:rounded-2xl">
  <div className="flex  justify-start items-start px-2 pt-1 pb-1.5 mt-1 mh:p-4">
    <div className="flex justify-center items-center bg-customBlue rounded-md w-[80px] h-[80px] mh:w-[180px] mh:h-[180px]  mh:rounded-2xl">
      <div className="flex flex-col justify-center items-center">
        <div className="font-semibold text-white text-[16px] mh:text-[32px]">
         {
           new Date(appointment.date).getDate()
         }
        </div>
        <div className="text-white text-[14px] mh:text-[30px]">{new Date(appointment.date).toLocaleString('en-US', { weekday: 'short' })}</div>
        <div className="text-white text-[14px] mh:text-[30px]">{new Date(appointment.date).toLocaleString('en-US', { month: 'short' })}</div>
      </div>
    </div>
  </div>
  <div className="w-full" >
    <div className="flex flex-col mt-2 items-start mh:rounded-2xl mh:ml-2 mh:mt-6">
      <div className="text-[10px] font-semibold mh:text-[22px]">
         {appointment.time}
      </div>
      <div className="text-[14px] font-bold mh:text-[30px] w-full">
         {appointment.doctorcategory}
      </div>
      <div className="text-[9px] -mt-0.5 mh:text-[22px] mh:-mt-2">
         {appointment.doctorname}
      </div>
      <div className="mr-2 w-full pr-2 -mb-8 mt-3 mh:w-[34vh] mh:mt-7">
        <div onClick={() => navigate("/checkIn4",{state:{appointment:appointment}})} className="flex   justify-center items-center p-0.5 rounded-sm text-[11px] bg-customBlue text-white  mh:h-11 mh:rounded-lg">
          Appointment Details
        </div>
      </div>
    </div>
  </div>
</div>
))}
</div>
    
      <FooterS/>
    </div>
  );
};

export default CheckIn3;
