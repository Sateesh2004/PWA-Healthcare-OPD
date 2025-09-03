import Doctor from "../../components/Cards/Doctor";
import Flow from "../../components/Flow/Flow";
import React from "react";
import { Input } from "@/components/ui/input";
import Header from "../../components/Header/Header";
import { CiSearch } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { useLocation, useNavigate } from 'react-router-dom';

import DoctorCard from "../../components/DoctorCard/doctorCard";
import Footer from "../../components/Footer/Footer";
import FooterS from "../../components/Footer/FooterS";

const Walk2 = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const { categoryName, doctorsData } = location.state || {};
  console.log(categoryName,doctorsData)
  return (
    <div className="bg-hero bg-cover bg-center h-screen">
      <div className={"flex   justify-between  pt-4 mh:mx-16"}>
          <div onClick={() => navigate(-1)} className="flex ml-8 hover:cursor-pointer text-white mh:mt-6">
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
      <div className="px-8" >
        <div className=" mh:mx-16  ">
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
        <div className="absolute   top-[45%] transform -translate-y-1/2  ">
          <img
            src="/images/search.webp"
            alt="Search"
            className="mh:w-[26px] mh:h-[26px] ml-5 w-[12px] h-[12px] alt-gray-200"
          />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full mh:h-[74px] h-[28px] mh:pl-16 pl-8 pr-4 rounded-lg mh:rounded-[15px] bg-white mh:text-3xl text-sm placeholder-gray-300"
        />
      </div>
      
      

      <DoctorCard categoryName={categoryName} doctorsData={doctorsData}/>
       </div>

      {/* <div className="flex justify-between mh:mt-2 mt-5">
        <div className="ml-10 mh:ml-24">
          <div
            className={
              "flex justify-center items-center p-2 bg-[#fff] text-white rounded font-semibold text-sm w-[14vh] h-[5vh] mt-[4vh] bg-customBlue      -customGray mh:text-3xl mh:rounded-xl"
            }
          >
            Back to start
          </div>
        </div>
        <div className={"flex mt-[7vh] mr-9  mh:mr-24"}>
          <img className="w-[12vh]" src="/images/footer.webp" />
        </div>
      </div> */}
      <FooterS back={true}/>
    </div>
  );
};

export default Walk2;
