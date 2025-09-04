import { ChevronLeft } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import Carousel from "../../components/Carousel/carousel";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import DoctorCategories from "../../components/Doctors/DoctorCategories";
import FooterS from "../../components/Footer/FooterS";
const Walk1 = () => {
  const navigate = useNavigate();

  





  return (
    <div className="  bg-hero   h-screen bg-cover bg-center">
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
        <div className="text-white  font-semibold   mh:mx-16 -mt-2 mh:-mt-4">
          <h2 className="text-xl mh:text-6xl">welcome to</h2>
          <h2 className="text-2xl mh:text-7xl mh:mt-4 mh:mb-12 mb-4">
            Narayana Eye Hospital OPD
          </h2>

          <Carousel />
          <div className="mt-5 mh:mt-16 mb-2">
            <p className="mh:text-[36px] text-[16px] text-white mh:font-[700]">
              Select for Immediate genral OPD consultation
            </p>
          </div>
          <div>
            <Button className="bg-gradient-to-r w-full mh:mt-5 from-[#084B83] mh:h-[105px] font-[700] mh:p-5 mh:text-[30.02px] mh:rounded-[12px] to-[#16CDE1]">
              Immediate Consultation
            </Button>
          </div>
          <div className="text-white mh:mt-6 mh:text-[40px] mh:font=[700] py-1.5">
            <h1>Select the type of consultation</h1>
          </div>
         
          <DoctorCategories/>
        </div>
      </div>
      <FooterS back={true}/>
    </div>
  );
};

export default Walk1;
