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
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import FooterS from "../../components/Footer/FooterS";
const Walk4 = () => {
  const location = useLocation();
  console.log("HI",location.state)
  const navigate = useNavigate();
  const { date, doctorid, time,category } = location.state || {};
  return (
    <div className="bg-hero bg-cover    bg-center h-screen">
      <div className={"flex   justify-between  pt-4 mh:mx-16"}>
          <div onClick={() => navigate(-1)} className="flex ml-8 hover:cursor-pointer text-white mh:mt-6">
            <img
              className="w-3 h-4 mt-1.5 mr-1 mh:w-6 mh:h-9 mh:mr-3"
              src="/images/vector.svg"
            />
            <div className="text-lg mh:text-[40px] mh:mt-2"> Back </div>
          </div>
          <img
            className={"w-[14vh] mr-4 mh:w-[13vh] mh:mt-4"}
            src="/images/logo.png"
          />
        </div>
      <div className="px-8" >
      <div>
          <h1 className="text-[22px] mh:text-[60px] font-dmsans font-semibold text-white">
          {category}
          </h1>
          <div className="relative mh:z-10 ">
            <Flow
              width="w-[210px] mh:w-[760px]" // Dynamically applying Tailwind's responsive width classes
              highlightIndices={[0, 1, 2, 3]}
            />
          </div>
        </div>
      <div className="mt-8">
        <PatientRegistration date={date} doctorid={doctorid} time={time} category= {category} />
      </div>
      </div>

    
      <FooterS back={true} />
    </div>
  );
};

export default Walk4;
