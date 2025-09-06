import Doctor from "../../components/Cards/Doctor";
import Flow from "../../components/Flow/Flow";
import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import Header from "../../components/Header/Header";
import { CiSearch } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { useLocation, useNavigate } from 'react-router-dom';

import DoctorCard from "../../components/DoctorCard/doctorCard";
import Footer from "../../components/Footer/Footer";
import FooterS from "../../components/Footer/FooterS";
import { Search } from "lucide-react";

const Walk2 = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const { categoryName, doctorsData } = location.state || {};
  console.log(categoryName,doctorsData)
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
        <div className=" ">
        <h1 className="text-[22px] mh:text-[60px] font-dmsans font-semibold text-white">
           {categoryName}
        </h1>
        <div className="relative mh:z-10 ">
        <Flow
            width="w-[120px] mh:w-[320px]" // Dynamically applying Tailwind's responsive width classes
            highlightIndices={[0, 1]}
          />
          <div className="mh:mt-14 mt-4">
            <h1 className="mh:text-[34px] font-dmsans text-[13px] mb-1 font-semibold text-white">
              Immediate Consultation
            </h1>
            <button
              className={`mh:mt-5 mh:p-7 p-4 rounded-sm mh:text-[34px] text-[13px] font-semibold text-white mh:rounded-[10px] block w-full bg-[linear-gradient(89.99deg,_#084B83_-63.38%,_#16CDE1_124.88%)] `}
            >
              Select for immediate consultation
            </button>
          </div>
        </div>
      </div>
      <div className="mh:mt-5 mt-2    mh:mx-14">
        <h1 className="text-center text-[14px] font-semibold text-white mh:text-[38px]">
          OR
        </h1>
      </div>
      <div className="mh:mb-3 mh:mx-16     ">
        <h1 className=" text-white    text-[14px] font-semibold mh:text-[36px] ">
          Select Doctor
        </h1>
      </div>
      <div className="flex   relative    mh:mx-16  mh:py-4 mh:pb-8 ">
        <div className="absolute left-3  top-[50%] transform -translate-y-1/2  ">
          <Search  className="w-4 h-4 text-gray-300" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full mh:h-[74px] h-[28px] mh:pl-16 pl-8 pr-4 rounded-lg mh:rounded-[15px] bg-white mh:text-3xl text-sm placeholder-gray-300"
        />
      </div>
      
      

      <DoctorCard categoryName={categoryName} doctorsData={doctorsData}/>
       </div>

      
      <FooterS back={true}/>
    </div>
  );
};

export default Walk2;
