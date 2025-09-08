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
    try {
       

      const data = [
    {
        "language": "English"
    },
    {
        "language": "ಕನ್ನಡ"
    },
    {
        "language": "हिंदी"
    }
]
      console.log(data)
      setLanguages(data);
    } catch (error) {
      console.error("Error fetching languages:", error.message);
    }
  };

  fetchData();
}, []);


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


  const handleSelection = (index) => {
    setActiveIndex(index);
  };

  const handleNavigate = () => {
    const language = languages[activeIndex].language;
    navigate("/screen2", { state: { language } });
  };

  return (
    <div className="relative  bg-hero p-3  h-screen bg-cover bg-center" style={{ height: "calc(var(--vh) * 100)" }}>
      <div className={"flex justify-between"}>
          <div onClick={() => navigate(-1)} className="flexhover:cursor-pointer text-white mh:mt-6">
             <FaRegCircleUser className="text-white text-xl sm:text-3xl" />
          </div>
          <img
            className={"w-[14vh] mh:w-[13vh]"}
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
