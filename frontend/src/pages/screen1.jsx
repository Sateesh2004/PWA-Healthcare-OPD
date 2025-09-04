import React, { useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import FooterS from "../components/Footer/FooterS";

const Screen1 = () => {
  const [languages, setLanguages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/languages");
      const data = await response.json();
      setLanguages(data);
    };
    fetchData();
  }, []);

  const handleSelection = (index) => {
    setActiveIndex(index);
  };

  const handleNavigate = () => {
    const language = languages[activeIndex].language;
    navigate("/screen2", { state: { language } });
  };

  return (
    <div className="bg-hero bg-cover bg-center min-h-screen">
      

      <div className={"flex   justify-between  pt-4 mh:mx-16"}>
          <div onClick={() => navigate(-1)} className="flex ml-8 hover:cursor-pointer text-white mh:mt-6">
             <FaRegCircleUser className="text-white text-xl sm:text-3xl" />
          </div>
          <img
            className={"w-[14vh] mr-4 mh:w-[13vh] mh:mt-4"}
            src="/images/logo.png"
          />
        </div>

      {/* Center logo + text */}
      <div className="flex flex-col  justify-center items-center mt-8 sm:mt-12">
       <img src="/images/combined_logo.png" alt="" className="transform scale-50" />
      </div>

      {/* Language Selector */}
      <div className="px-6 mt-4">
        <span className="block text-gray-300 text-lg sm:text-2xl mb-3">
          Select language
        </span>
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
          {languages.map((language, index) => (
            // <Button
            //   key={index}
            //   onClick={() => handleSelection(index)}
            //   className={`p-2 rounded-xl text-sm sm:text-lg  font-semibold ${activeIndex === index ? "bg-customBlue text-white" : "bg-white text-black hover:bg-customBlue hover:text-white cursor-pointer"}
            //   `}
            // >
            //   {language.language}
            // </Button>
            <button onClick={() => handleSelection(index)} className={`p-2 rounded-xl text-sm sm:text-lg  font-semibold ${activeIndex === index ? "bg-customBlue text-white" : "bg-white text-black hover:bg-customBlue hover:text-white cursor-pointer"}
            //   `} >
              {language.language}
            </button>
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex  justify-center px-6 mt-24">
        <div
          onClick={handleNavigate}
          className="p-2  rounded-xl bg-white text-black font-semibold 
                     text-center w-1/2 sm:w-2/5 
                     hover:bg-customBlue hover:text-white cursor-pointer"
        >
          Click to continue
        </div>
      </div>

      {/* Footer */}
      <FooterS back={false} />
    </div>
  );
};

export default Screen1;
