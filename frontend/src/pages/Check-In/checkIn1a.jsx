import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import FooterS from "../../components/Footer/FooterS";
import { useNavigate } from "react-router-dom";
const CheckIn1a = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-hero bg-cover bg-center h-screen">
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

      <div className="text-white font-semibold -ml-3 mh:ml-6">
        <div className="text-xl pl-10 mh:text-5xl">welcome to</div>
        <div className="text-[28px] pl-10 mh:text-7xl mh:mt-4">
          Narayana Eye Hospital OPD
        </div>
      </div>

      <div className="text-white text-[26px] font-semibold pl-7 mt-8 mh:text-[64px] mh:ml-[40px] mh:mt-[105px]">
        Scan QR on Your ticket{" "}
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-[14vh] mt-11 mh:mt-[147px]"
          src="/assets/images/qr-code.webp"
        />
        <span className="text-white mt-4 mh:text-[36px] mh:mt-[36px]">
          Scaning
        </span>
      </div>

      <div className="flex text-white justify-center items-center text-[15px] mb-1 font-semibold mt-64 mh:text-4xl mh:mb-3 mh:mt-[590px]">
        OR
      </div>
      <div className="flex justify-center items-center px-14 mh:px-32">
        <div className="flex w-full bg-gradient-to-r from-customBlue to-customCyan h-8 justify-center items-center mh:h-20">
          <div onClick={() => navigate("/checkin1")} className="flex justify-center items-center text-white font-semibold text-[15px] mh:text-[40px]">
            Enter user info
          </div>
        </div>
      </div>

      <FooterS/>
    </div>
  );
};

export default CheckIn1a;
