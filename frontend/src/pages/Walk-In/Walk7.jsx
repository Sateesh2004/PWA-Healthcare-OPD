import React, { useEffect } from "react";
import Flow from "../../components/Flow/Flow";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FooterS from "../../components/Footer/FooterS";
const Walk7 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const appid = location.state.appid;
  const appointment = location.state.appointment;
  const category = appointment.doctorcategory

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

<div className="" >
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

      <div className="relative z-10">
        <div className="relative">
          

          <div onClick={()=>{navigate('/walkin8',{state:{appointment,category}});}} className="flex mh:rounded-[12px] border border-customGray justify-between items-center mh:mt-52 bg-gradient-to-r from-[#084B83] from-40% to-[#16CDE1] mh:px-[43px] mh:py-[30px] px-4 py-2 font-dmsans mt-40 rounded-[4px]">
            <div className="mh:text-[52px] text-[18px] text-white">
              <h1>Pay using UPI</h1>
              <p className="mh:text-[25.6px] text-[10px] mt-0.5">
                I have an appointment
              </p>
            </div>
            <div>
              <img
                src="/images/upi1.svg"
                alt=""
                className="w-[80px] h-[50px]"
              />
            </div>
          </div>
          <div  className="flex mh:rounded-[12px] border border-customGray justify-between items-center  bg-gradient-to-r from-[#084B83] from-40% to-[#16CDE1] mh:px-[43px] mh:py-[30px] px-4 py-2 font-dmsans mt-10 rounded-[4px]">
            <div onClick={()=>{navigate('/checkin5',{state:{appointment,category}});}} className="mh:text-[52px] text-[18px] text-white">
            <h1>Pay in Cash (At Counter)</h1>
              <p className="mh:text-[25.6px] text-[10px] mt-0.5">
              I dont't have an appointment
              </p>
            </div>
            <div>
              <img
                src="/images/cash.svg"
                alt=""
                className="w-[80px] h-[50px]"
              />
            </div>
          </div>
         
        </div>
      </div>
</div>
      
      <FooterS back={true}/>
    </div>
  );
};

export default Walk7;
