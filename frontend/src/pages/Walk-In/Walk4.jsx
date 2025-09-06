import Doctor from "../../components/Cards/Doctor";
import Flow from "../../components/Flow/Flow";
import React, { useEffect } from "react";
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
  const location = useLocation();
  console.log("HI",location.state)
  const navigate = useNavigate();
  const { date, doctorid, time,category } = location.state || {};
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
      <div className="mt-2">
        <PatientRegistration date={date} doctorid={doctorid} time={time} category= {category} />
      </div>
      </div>

    
      <FooterS back={true} />
    </div>
  );
};

export default Walk4;
