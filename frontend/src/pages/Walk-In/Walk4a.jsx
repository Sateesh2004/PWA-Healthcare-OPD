import Doctor from "../../components/Cards/Doctor";
import Flow from "../../components/Flow/Flow";
import React from "react";
import { Input } from "@/components/ui/input";
import Header from "../../components/Header/Header";
import { CiSearch } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import DoctorCard from "../../components/DoctorCard/doctorCard";
import PatientRegistrationExistingUsers from "../../components/PatientRegistration/PatientRegistrationExistingUsers";
import { useLocation, useNavigate } from "react-router-dom";
import FooterS from "../../components/Footer/FooterS";
const Walk4a = () => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location.state)  
  const {doctorid,date,time,patientNumber,category} = location.state
  return (
    <div className="mh:px-5 bg-hero bg-cover bg-center h-screen">
      
      <div className={"flex justify-between pt-4 mh:mx-14"}>
        <div onClick={()=>{navigate(-1,{state:date, doctorid, time,})}} className="flex text-white mh:mt-6">
          <img
            className="w-3 h-4 mt-1.5 mr-1 mh:w-6 mh:h-9 mh:mr-3"
            src="/images/vector.webp"
          />
          <div className="text-lg mh:text-[40px] mh:mt-2"> Back </div>
        </div>
        <img
          className={"w-[14vh] mr-4 mh:w-[13vh] mh:mt-4"}
          src="/images/logo.webp"
        />
      </div>
      <div className=" mh:mx-14  ">
        <h1 className="text-[22px] mh:text-[60px] font-dmsans font-semibold text-white">
           {category}
        </h1>
        <div className="relative mh:z-10 ">
        <Flow
            width="w-[120px] mh:w-[320px]" // Dynamically applying Tailwind's responsive width classes
            highlightIndices={[0, 1]}
          />
          
          
        </div>
      </div>
      <div>
        <PatientRegistrationExistingUsers doctorid={doctorid} date={date} time={time} patientNumber={patientNumber} category={category} />
      </div>

      <FooterS back={true} />
    </div>
  );
};

export default Walk4a;
