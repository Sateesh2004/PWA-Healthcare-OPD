import { ChevronLeft } from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "../../components/ui/button";
import Carousel from "../../components/Carousel/carousel";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import DoctorCategories from "../../components/Doctors/DoctorCategories";
import FooterS from "../../components/Footer/FooterS";
const Walk1 = () => {
  const navigate = useNavigate();
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
      
     
        <div className="text-white  font-semibold   mh:mx-16 -mt-2 mh:-mt-4">
          <h2 className="text-lg mh:text-6xl">welcome to</h2>
          <h2 className="text-xl mh:text-7xl mh:mt-4 mh:mb-12 mb-3">
            Narayana Eye Hospital OPD
          </h2>

          <Carousel />
          <div className="mt-5 mh:mt-16 mb-2">
            <p className="mh:text-[36px] text-[14px] text-white mh:font-[700]">
              Select for Immediate general OPD consultation
            </p>
          </div>
          <div>
            <Button className="bg-gradient-to-r w-full mh:mt-5 from-[#084B83] mh:h-[105px] font-[700] mh:p-5 mh:text-[30.02px] mh:rounded-[12px] to-[#16CDE1]">
              Immediate consultation
            </Button>
          </div>
          <div className="text-white mac:mt-4 mh:mt-6 mh:text-[40px] mh:font=[700] py-1.5">
            <h1>Select the type of consultation</h1>
          </div>
         
          <DoctorCategories/>
        </div>
    
      <FooterS back={true}/>
    </div>
  );
};

export default Walk1;
