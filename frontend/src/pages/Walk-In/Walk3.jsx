import Flow from "../../components/Flow/Flow";
import PatientRegistration from "../../components/PatientRegistration/PatientRegistration";
import React from "react";
import  Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header";
// import DoctorCard from "../../components/DoctorCard/doctorCard";
import DoctorCardExtended from "../../components/DoctorCardExtended/DoctorCardExtended";
import { useLocation, useNavigate } from 'react-router-dom';
import FooterS from "../../components/Footer/FooterS";
import { Search } from "lucide-react";

const Walk3 = () => {
  const location = useLocation();
  const navigate=useNavigate()
  // console.log(location.state)
  const { doctorid,doctors } = location.state || {}; 
  // console.log(doctorid)
  // console.log(doctors)
  return (
    <div>
      <div className=" bg-hero bg-cover bg-center h-screen">
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
          <div className="">
          <h1 className="text-[22px] mh:text-[60px] font-dmsans font-semibold text-white">
           {doctors[0].category}
          </h1>
          <div className="relative mh:z-10 ">
            <Flow
              width="w-[210px] mh:w-[760px]" // Dynamically applying Tailwind's responsive width classes
              highlightIndices={[0, 1, 2, 3]}
            />
          </div>
        </div>
        <div className="mh:mb-3 mh:mr-4 mt-5 mh:mx-16">
          <h1 className=" text-white text-[14px] font-semibold mh:text-[36px] ">
            Select Doctor
          </h1>
        </div>
      
        <div className="flex   relative mt-2  mh:mx-16  mh:py-4 mh:pb-8 ">
        <div className="absolute left-3 top-[50%] transform -translate-y-1/2  ">
          <Search  className="w-4 h-4 text-gray-300" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full mh:h-[74px] h-[28px] mh:pl-16 pl-8 pr-4 rounded-lg mh:rounded-[15px] bg-white mh:text-3xl text-sm placeholder-gray-300"
        />
      </div>

        <div className="relative mt-6">
          {/* Doctor Cards */}
          <DoctorCardExtended doctorid={doctorid} doctors={doctors} />
          
        </div>
        </div>
        
      </div>
          <FooterS back={true}/>
    </div>
  );
};

export default Walk3;
