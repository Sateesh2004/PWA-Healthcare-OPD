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
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterS from "../../components/Footer/FooterS";
import { FaRegEdit } from "react-icons/fa";





const Walk5 = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const category = location.state.category;
  console.log(location)
  const[patientInfo,setPatientInfo]=useState({
    patientName:'',
    patientId:'',
    patientNumber:'',
  })
  const [newData,setNewData]=useState({})
  const handleNavigate=(e)=>{
    e.preventDefault()
    const patientId = patientInfo.patientId
    navigate('/apointment',{state:{patientId,category}});
  }
    useEffect(()=>{
      const fetchData = async () => {
        const patientNumber = location.state.patientNumber;
        console.log(patientNumber)
        const response = await fetch(`http://localhost:3000/patient/getpatient/${patientNumber}`);
        const data = await response.json();
        console.log("hid",data)
        setNewData(data)
        setPatientInfo({
          patientName: data.patientName,
          patientId: data.patientId,
          patientNumber: data.patientPhone,
          
        });
        
      }
      fetchData();
    },
  [])










  return (
    <div className="bg-hero bg-cover   bg-center h-screen">
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
            {category}
          </h1>
          <div className="relative mh:z-10 ">
            <Flow
              width="w-[210px] mh:w-[760px]" // Dynamically applying Tailwind's responsive width classes
              highlightIndices={[0, 1, 2, 3]}
            />
          </div>
        </div>
      <div className="mh:mt-[300px] mt-24 mb-[18vh] mh:mb-[22vh] flex-grow flex items-center">
        <div className="mh:mt-20 mt-10  w-full">
          <div
            action=""
            className="bg-white mh:p-8 mh:rounded-[16px] rounded-md p-4"
          >
            <div >
              <div className="flex items-center justify-between">
              <h1 className="mh:text-[52px] text-[20px] font-[600] ">
                Patient Info
              </h1>
              <button onClick={()=>{navigate('/edit',{state:{newData,category}})}} className="flex ml-auto px-4 py-1 text-[10px] w-28 h-6 font-semibold text-white bg-customBlue rounded-md border mh:text-[22px] mh:px-6 mh:py-2 justify-center items-center mh:w-56 mh:h-11">
                          Edit
                          <FaRegEdit className="ml-3 text-[14px] mh:text-[26px]" />
                        </button>
              </div>
             
              <p className="mh:text-[30px] text-[11.5px] mh:mt-4 mt-1.5 font-[400]  ">
                Patient Name : {patientInfo.patientName || "loading"}
              </p>
              <p className="mh:text-[30px] text-[11.5px] font-[400]  ">
                Patient ID : {patientInfo.patientId || "loading"}
              </p>
              <p className="mh:text-[30px] text-[11.5px] font-[400]  ">
                Phone No : {patientInfo.patientNumber || "loading"}
              </p>
            </div>
            <Button onClick={handleNavigate} className="w-full rounded-[3px] mt-4 text-md bg-gradient-to-r from-customBlue from-35% to-customCyan h-8 mh:h-20 mh:text-4xl mh:bg-gradient-to-r mh:from-customBlue mh:from-40% mh:to-customCyan mh:mt-8 mh:mb-3 mh:rounded-lg">
              Confirm Patient Info
            </Button>
          </div>
        </div>
      </div>
      </div>

      <FooterS back={false}/>
    </div>
  );
};

export default Walk5;
