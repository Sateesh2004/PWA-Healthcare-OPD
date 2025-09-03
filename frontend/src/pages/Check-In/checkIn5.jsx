import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const CheckIn5 = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const appointment = location.state.appointment
  console.log(appointment)
  const date = appointment.date;
  console.log(date)
  const formatDate= new Date(date);
  const day = formatDate.getDate(); // 4  
  const monthName = formatDate.toLocaleString('en-US', { month: 'short' }); // Jan    
  const dayName = formatDate.toLocaleString('en-US', { weekday: 'short' }); // Jan
  return (
    <div className="h-screen bg-hero bg-cover bg-center ">
      <div className="flex justify-between pl-8 pt-4 mh:mr-4 mh:ml-14">
        <div className="flex text-white mh:mt-6">
          <img
            className="w-3 h-4 mt-1.5 mr-1 mh:w-6 mh:h-9 mh:mr-3"
            src="./assets/images/vector.webp"
          />
          <div className="text-lg mh:text-[40px] mh:mt-2"> Back </div>
        </div>
        <img
          className={"w-[14vh] mr-7 mh:w-[13vh] mh:mt-4"}
          src="./assets/images/logo.webp"
        />
      </div>

      <div className="flex-col bg-white relative rounded-md ml-8 mr-7 mt-2 flex h-fit mh:ml-20 mh:mr-20 mh:rounded-2xl mh:mt-8">
        <div className="flex">
          <div className="absolute top-3 right-3 text-gray-400 text-lg cursor-pointer mh:top-6 mh:right-6 mh:text-6xl">
            <RxCross2 />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-start items-start px-2 mt-2 mh:p-4 h-[80px] mh:h-[200px]">
              <div className="flex justify-center items-center bg-customBlue rounded-md w-[80px] h-[80px] mh:w-[180px] mh:h-[180px]  mh:rounded-2xl">
                <div className="flex flex-col justify-center items-center">
                  <div className="font-semibold text-white text-[16px] mh:text-[32px]">
                    {day}
                  </div>
                  <div className="text-white text-[14px] mh:text-[30px]">
                    {dayName}
                  </div>
                  <div className="text-white text-[14px] mh:text-[30px]">
                    {monthName}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-2 items-start mh:rounded-2xl mh:ml-2 mh:mt-6">
            <div className="text-[10px] font-semibold mh:text-[22px] mt-3 mh:mt-6">
              {appointment.time}
            </div>
            <div className="text-[14px] font-bold mh:text-[30px]">
              {appointment.doctorcategory}
            </div>
            <div className="text-[9px] -mt-0.5 mh:text-[22px] mh:-mt-2">
              {appointment.doctorname}
            </div>
          </div>
        </div>
        <div className="ml-2 mr-2 mb-2 flex justify-center items-center text-[10px] rounded-sm  bg-customBlue mt-2 font-light font-dmsans text-white mh:p-4 p-2 mh:rounded-lg mh:text-[24px] mh:mx-4 mh:my-6 ">
          Appointment Details
        </div>
      </div>

      <div className="relative justify-between flex bg-white font-semibold ml-8 mr-7 mt-3 rounded-lg p-2 pb-4 mh:ml-20 mh:mr-20 mh:rounded-2xl mh:mt-7">
        <div className="justify-center items-center mh:text-[40px] mh:pl-2">
          Collect Your Token And Patient card from bellow
        </div>
        <div className="w-24 h-16 mr-12 ml-8 mh:w-56 mh:h-40 mh:mt-6 mh:pb-4 mh:ml-16 mh:mr-40">
          <img src="./assets/images/receipt.webp" />
        </div>
        <div className="absolute top-2 right-2 text-gray-400 text-lg mh:top-6 mh:right-6 mh:text-6xl">
          <RxCross2 />
        </div>
      </div>

      <div className="relative bg-white font-semibold ml-8 mr-7 mt-3 rounded-lg p-2 pb-4 mh:ml-20 mh:mr-20 mh:rounded-2xl mh:mt-7">
        <div className="absolute top-2 right-2 text-gray-400 text-lg mh:top-6 mh:right-6 mh:text-6xl">
          <RxCross2 />
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          <div className="font-semibold text-2xl mh:text-[64px] mh:mt-8">
            TOKEN NO : 102
          </div>
          <div className="text-sm mh:text-[36px] mh:py-8 mh:mt-4">
            Go to center Waiting room 2
          </div>
        </div>
      </div>

      <div className="relative bg-white font-semibold ml-8 mr-7 mt-3 rounded-lg p-2 pb-4 mh:ml-20 mh:mr-20 mh:rounded-2xl mh:mt-7">
        <div className="-mt-1 mh:text-[36px] px-2">
          <div className="absolute right-2 mt-2 text-gray-400 text-lg mh:right-6 mh:text-6xl">
            <RxCross2 />
          </div>
          Follow the map for your waiting area
        </div>
        <div className="mt-3 mh:mt-10 mh:mb-2">
          <img className="w-full" src="./assets/images/map.webp" />
        </div>
      </div>

      <div  className="flex justify-between px-8">
        <div className="flex mh:mt-[2vh]">
          <div onClick={()=>{navigate("/")}} className="flex justify-center items-center p-2  text-white rounded font-semibold text-sm w-[14vh] h-[5vh] mt-[2vh] bg-customBlue border border-customGray mh:text-4xl mh:rounded-xl mh:ml-12 mh:h-[6vh] ">
            Back to start
          </div>
        </div>
        <div className="flex justify-end items-end">
          <div onClick={()=>{navigate("/checkin6")}} className="flex justify-center items-center p-2  text-white rounded font-semibold text-sm w-[14vh] h-[5vh] mt-[2vh] bg-customBlue border border-customGray mh:text-4xl mh:rounded-xl mh:mr-11 mh:h-[6vh] ">
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckIn5;
