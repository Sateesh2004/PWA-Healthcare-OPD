import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const CheckIn6 = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-hero bg-cover bg-center h-screen">
      <div className="flex justify-between pl-8 pt-4 mh:mr-4 mh:ml-14">
        <div className="flex text-white mh:mt-6">
          <img
            className="w-3 h-4 mt-1.5 mr-1 mh:w-6 mh:h-9 mh:mr-3"
            src="/images/vector.webp"
          />
          <div className="text-lg mh:text-[40px] mh:mt-2"> Back </div>
        </div>
        <img
          className={"w-[14vh] mr-7 mh:w-[13vh] mh:mt-4"}
          src="/images/logo.webp"
        />
      </div>

      <div className="flex items-center justify-center min-h-[80vh] px-8">
        <div className="bg-white rounded-lg p-3 w-full text-center">
          <h1 className="text-xl font-semibold mh:text-[46px] mh:mt-4">
            THANK YOU
          </h1>
          <p className="mt-2 text-xs mh:text-[26px] mh:py-8">
            THANK YOU FOR USING OPD KIOSK
          </p>
          <button onClick={() => navigate("/")} className="mt-4 rounded-sm bg-gradient-to-r from-customBlue from-35% to-customCyan w-full text-white font-semibold mh:rounded-md py-1 px-6 mh:text-[30px]">
            Back to Start
          </button>
        </div>
      </div>

      <div className="flex justify-end mh:mt-10 mt-[10px]">
        <div className={"flex mt-[6vh] mr-9 mh:mt-[6vh] mh:mr-24"}>
          <img className="w-[12vh]" src="/images/footer.webp" />
        </div>
      </div>
    </div>
  );
};

export default CheckIn6;
