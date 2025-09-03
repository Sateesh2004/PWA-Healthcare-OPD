import React, { useState } from "react";
import { GoClock } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { Button } from "../ui/button";
import { use } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function DoctorCardExtended(props) {
  const navigate = useNavigate()

  const {doctorid,doctors} = props
  const [selectedTime,setSelectedTime]=useState(0)

  const [times, setTimes] = useState([]);
  
  const timeSelector = (time,index) => {

    setSelectedTime(index)
  }
  const doctorInfo = doctors
  .flatMap((category) => category.doctors) 
  .find((doctor) => doctor.id === doctorid);
  
  const [activeDate,setActiveDate]=useState(doctorInfo.availabledateslots[0].date)
  const handleNavigate=()=>{
    const time = times[selectedTime]
    const date = activeDate
    const category = doctorInfo.category
    // console.log(doctorid,times[selectedTime],activeDate)
    navigate('/walkin4', { state: {doctorid,time,date,category} });
  }

  useEffect(() => {
    const getTiming = ()=>{
    
      for(const categories of doctors){
        
      
         if(categories.category==doctorInfo.category){
           // const doctors=categories.doctors
          
           console.log(categories.doctors)
           console.log(categories.doctors.length)
           for(let i=0;i<categories.doctors.length;i++){
             if(categories.doctors[i].id==doctorInfo.id){
               const dates = categories.doctors[i].availabledateslots
               // console.log(dates)
               for(let j=0;j<dates.length;j++){
                 if(dates[j].date==activeDate){
                   const timings = dates[j].timeslots
                   
                   setTimes(timings)
                    
         }}}}}
     
        
         
       }
     }
     getTiming()
  },[activeDate])



  return (
    <div className="bg-white p-1.5 mh:rounded-[20px] rounded-lg mh:p-4 mh:mx-16 mt-3 ">
      <div className="flex md:flex-row gap-4">
        <img
          src="./assets/images/doctor-profile.webp"
          alt="Doctor"
          className="w-[68px] rounded-lg md:w-[170px] h-[56px] md:h-[152px] mh:rounded-2xl"
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col mh:gap-3 gap-0.5">
            <h2 className="text-[12px] mh:text-[16px] font-bold font-poppins text-[#1c1c1c]">
            {doctorInfo.name}
            </h2>
            <div className="flex mh:gap-x-44 gap-x-10">
              <div className="grid ">
                <text className="mh:text-[23px] mb-2 mh:mb-0 text-[10px] text-[#8696bb] font-poppins">
                {doctorInfo.category}
                </text>
                <text className="mh:text-[21px] text-[9px] mh:mt-3 font-bold font-poppins  text-customGreen">
                {doctorInfo.availability ? "Available Today" : "Unavailable"}
                </text>
              </div>
              <div className="grid grid-col mh:-mt-5 -mt-2">
                <text className="mh:text-[23px] text-[10px] text-blue-400 flex ">
                  <GoClock className="mh:text-[28px] text-[12px]" />
                  <text className="mh:-mt-1 -mt-0.5 mh:ml-2 ml-1">
                  {doctorInfo.openingtime} - {doctorInfo.closingtime}
                  </text>
                </text>
                <text className="mh:text-[23px] text-[10px] mh:mt-3 text-yellow-400 flex">
                  <CiClock2 className="mh:text-[28px] text-[12px]" />
                  <text className="mh:-mt-1 -mt-0.5 mh:ml-2 ml-1">
                  {doctorInfo.waitingpatients}
                  </text>
                </text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[10px] font-semibold mt-2 mh:text-[28px]">
        Available Date slots
      </div>
      <div className="text-[9px] font-semibold mt-1 mh:text-[22px] mh:mt-3">
      <h1 className="flex mt-1 mh:text-[22px] gap-1 mh:mt-2 mh:gap-2">
  {(() => {
    const formatDate = new Date(activeDate);
    const day = formatDate.getDate(); // 4
    const monthName = formatDate.toLocaleString('en-US', { month: 'short' }); // Jan
    const dayName = formatDate.getFullYear(); 

    return (
      <>
        <div>{day}</div>
        <div>{monthName}</div>
        <div>{dayName}</div>
      </>
    );
  })()}
</h1>
        <div className="flex mt-1 gap-2 mh:mt-2 mh:gap-4">
          {/* <div className="flex justify-center items-center bg-[linear-gradient(89.99deg,_#084B83_-63.38%,_#16CDE1_124.88%)]  border border-gray-300 rounded-lg w-[35px] h-[35px] mh:w-[90px] mh:h-[90px]  mh:rounded-2xl">
            <div className="flex flex-col justify-center items-center">
              <div className="text-white text-[7px] mh:text-[16px]">8</div>
              <div className="text-white text-[7px] mh:text-[16px]">Tue</div>
              <div className="text-white text-[7px] mh:text-[16px]">July</div>
            </div>
          </div> */}
          {/* <div className="flex justify-center items-center  border border-gray-300 rounded-lg w-[35px] h-[35px] mh:w-[90px] mh:h-[90px]   mh:rounded-2xl">
            <div className="flex flex-col justify-center items-center">
              <div className="font-semibold  text-[7px] mh:text-[16px]">9</div>
              <div className=" text-[7px] mh:text-[16px] text-customPurple font-semibold">
                Wed
              </div>
              <div className=" text-[7px] mh:text-[16px] font-semibold">
                July
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center  border border-gray-300 rounded-lg w-[35px] h-[35px] mh:w-[90px] mh:h-[90px]   mh:rounded-2xl">
            <div className="flex flex-col justify-center items-center">
              <div className="font-semibold  text-[7px] mh:text-[16px]">20</div>
              <div className=" text-[7px] mh:text-[16px] text-customPurple font-semibold">
                Tue
              </div>
              <div className=" text-[7px] mh:text-[16px] font-semibold">
                July
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center  border border-gray-300 rounded-lg w-[35px] h-[35px] mh:w-[90px] mh:h-[90px] mh:rounded-2xl">
            <div className="flex flex-col justify-center items-center">
              <div className="font-semibold  text-[7px] mh:text-[16px]">21</div>
              <div className=" text-[7px] mh:text-[16px] text-customPurple font-semibold">
                Wed
              </div>
              <div className=" text-[7px] mh:text-[16px] font-semibold">
                July
              </div>
            </div>
          </div> */}

{doctorInfo.availabledateslots.map((slot, index) => {
    const date = new Date(slot.date);
    const day = date.getDate(); 
    const weekday = date.toLocaleString("en-US", { weekday: "short" }); 
    const month = date.toLocaleString("en-US", { month: "short" }); 

    return (
      <div onClick={() => setActiveDate(slot.date)} key={index} className={`text-black hover:cursor-pointer bg-white text-center flex items-center justify-center ${activeDate===slot.date?'bg-[linear-gradient(89.99deg,_#084B83_-63.38%,_#16CDE1_124.88%)] text-white':'bg-white'} border border-gray-300 rounded-lg  w-[35px] h-[35px] mh:w-[90px] mh:h-[90px]  mh:rounded-2xl`} >
        <div>
        <div className="font-semibold  text-[7px] mh:text-[16px]">{day}</div>
        <div className=" text-[7px] mh:text-[16px] font-semibold">
                {weekday}
              </div>
        <div className=" text-[7px] mh:text-[16px] font-semibold">
                {month}
              </div>
      </div>
      </div>
    );
  })}
        </div>
      </div>
      <div className="text-[10px] font-semibold mt-1 mh:text-[28px] mh:mt-2">
        Available Date slots
      </div>
      <div className="text-[9px] font-semibold mh:text-[22px]">
      <h1 className="flex mt-1 mh:text-[22px] gap-1 mh:mt-2 mh:gap-2">
  {(() => {
    const formatDate = new Date(activeDate);
    const day = formatDate.getDate(); // 4
    const monthName = formatDate.toLocaleString('en-US', { month: 'short' }); // Jan
    const dayName = formatDate.getFullYear(); 

    return (
      <>
        <div>{day}</div>
        <div>{monthName}</div>
        <div>{dayName}</div>
      </>
    );
  })()}
</h1>
        <div className="grid grid-cols-5 gap-x-4 gap-y-2 ml-1 mt-1 mh:gap-x-10 mh:gap-y-6">
          {/* <div className="flex justify-center rounded-sm border border-gray-300 px-1 py-1 mh:py-3 mh:rounded-xl">
            10:00 PM
          </div>
          <div className="flex justify-center rounded-sm border border-gray-300 px-1 py-1 mh:py-3 mh:rounded-xl">
            10:00 PM
          </div>
          <div className="flex justify-center rounded-sm border border-gray-300 px-1 py-1 mh:py-3 mh:rounded-xl">
            10:00 PM
          </div>
          <div className="flex justify-center rounded-sm border border-gray-300 px-1 py-1 mh:py-3 mh:rounded-xl">
            10:00 PM
          </div>
          <div className="flex justify-center rounded-sm border font-light border-gray-300 px-1 py-1 mh:py-3 mh:rounded-xl text-white bg-[linear-gradient(89.99deg,_#084B83_-63.38%,_#16CDE1_124.88%)]">
            10:00 PM
          </div>
          <div className="flex justify-center rounded-sm border border-gray-300 px-1 py-1 mh:py-3 mh:rounded-xl">
            10:00 PM
          </div>
          <div className="flex justify-center rounded-sm border border-gray-300 px-1 py-1 mh:py-3 mh:rounded-xl">
            10:00 PM
          </div>
          <div className="flex justify-center rounded-sm border border-gray-300 px-1 py-1 mh:py-3 mh:rounded-xl">
            10:00 PM
          </div>
          <div className="flex justify-center rounded-sm border border-gray-300 px-1 py-1 mh:py-3 mh:rounded-xl">
            10:00 PM
          </div>
          <div className="flex justify-center rounded-sm border border-gray-300 px-1 py-1 mh:py-3 mh:rounded-xl">
            10:00 PM
          </div> */}

          {times.map((time, index) => (
            <div onClick={()=>{timeSelector(time,index)}} className={`flex rounded-sm hover:cursor-pointer border border-gray-300 px-1 py-1 mh:py-3 mh:rounded-xl bg-customBlue  focus:bg-customBlue justify-center ${selectedTime==index?"bg-[linear-gradient(89.99deg,_#084B83_-63.38%,_#16CDE1_124.88%)] text-white":"bg-white text-black"}`} key={index}>{time}</div>
          ))}
       







        </div>
      </div>
      <div className="border-t border-t-gray-300 mt-4">
        <div onClick={handleNavigate} className="mt-2 hover:bg-customBlue hover:text-white hover:cursor-pointer py-1 flex justify-center text-[10px] font-dmsans-500 font-semibold mh:text-[24px] mh:py-5">
          Book Appointment
        </div>
      </div>
    </div>
  );
}

export default DoctorCardExtended;
