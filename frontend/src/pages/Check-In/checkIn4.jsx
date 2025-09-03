import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FooterS from '../../components/Footer/FooterS';
const CheckIn4 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const appointment = location.state.appointment;
  console.log(appointment)
  const date = appointment.date;
  const formatDate = new Date(date);
  const day = formatDate.getDate(); // 4  
  const monthName = formatDate.toLocaleString('en-US', { month: 'short' }); // Jan
  const dayName = formatDate.toLocaleString('en-US', { weekday: 'short' }); // Jan
  return (
    <div className="bg-hero bg-cover bg-center h-screen">
      <div className="flex justify-between pl-8 pt-4 mh:mr-4 mh:ml-14">
        <div className="flex text-white mh:mt-6">
          <img
            className="w-3 h-4 mt-1.5 mr-1 mh:w-6 mh:h-9 mh:mr-3"
            src="./assets/images/vector.webp"
          />
          <div className="text-lg mh:text-[40px] mh:mt-2"> Back </div>
        </div>
        <img
          className="w-[14vh] mr-7 mh:w-[13vh] mh:mt-4"
          src="./assets/images/logo.webp"
        />
      </div>

      <div className="text-white font-semibold mt-5 mh:ml-6 text-xl pl-8 mh:pl-14 mh:text-5xl mh:mt-16">
        {appointment.patientName}
      </div>

      <div className="text-white font-semibold mt-2 mh:ml-6 text-lg pl-8 mh:pl-14 mh:text-[40px] mh:mt-14">
        Confirm Appointment Details
      </div>

      <div className="bg-white relative rounded-lg mx-8 my-10 flex flex-col px-2 py-2.5 mh:mt-32 mh:mx-20 mh:rounded-2xl mh:px-6 mh:py-7">
        <div className="absolute top-3 right-3 text-gray-400 text-lg cursor-pointer mh:top-6 mh:right-6 mh:text-6xl">
          <RxCross2 />
        </div>
        <div className="flex items-center">
          <div className="flex justify-center items-center bg-customBlue rounded-md w-[80px] h-[80px] mh:w-[190px] mh:h-[190px] mh:rounded-2xl">
            <div className="flex flex-col justify-center items-center">
              <div className="font-semibold text-white text-[16px] mh:text-[40px]">
                {day}
              </div>
              <div className="text-white text-[14px] mh:text-[34px]">{dayName}</div>
              <div className="text-white text-[14px] mh:text-[34px]">{monthName}</div>
            </div>
          </div>
          <div className="ml-2 mh:ml-6">
            <div className="text-[10px] font-semibold mh:text-[24px]">
              {appointment.time}
            </div>
            <div className="text-[15px] -mt-1 font-bold mh:text-[32px]">
            {appointment.doctorcategory} 
            </div>
            <div className="text-[10px] -mt-0.5 mh:text-[24px] mh:-mt-2">
              {appointment.doctorname}
            </div>
          </div>
        </div>

        <div className="flex mt-7 text-sm font-bold mh:text-[36px] mh:mt-[4vh]">
          Appointment Details
          <button onClick={()=>{navigate('/walkin1')}} className="flex ml-auto px-4 py-1 text-[10px] w-28 h-6 font-semibold text-white bg-customBlue rounded-md border mh:text-[22px] mh:px-6 mh:py-2 justify-center items-center mh:w-56 mh:h-11">
            Edit
            <FaRegEdit className="ml-3 text-[14px] mh:text-[26px]" />
          </button>
        </div>

        <div className="mt-2 text-[10px] text-gray-800 mh:text-[26px] mh:mt-3">
          <div className="flex ">
            <p className='w-[50%]'>
              <strong>Patient Name:</strong> {appointment.patientName}
            </p>
            <p className="ml-3 w-[50%] mh:ml-[1vh] mh:pl-0.5">
              <strong>Doctor Name:</strong> {appointment.doctorname}
            </p>
          </div>
          <div className="flex ">
            <p className='w-[50%]'>
              <strong>Patient ID:</strong> {appointment.patientId}
            </p>
            <p className=" ml-3 w-[50%] mh:ml-[1vh] mh:pl-0.5 ">
              <strong>Appointment Date:</strong> {appointment.date}
            </p>
          </div>
          <div className="flex justify-stretch">
            <p className='w-[50%]'>
              <strong>Phone No:</strong> {appointment.patientPhone}
            </p>
            <p className="ml-3 w-[50%] mh:ml-[1vh] mh:pl-0.5">
              <strong>Appointment Time:</strong> {appointment.time}
            </p>
          </div>
        </div>

        <div className="mt-4 mh:mt-6">
          <p className="font-bold text-sm text-gray-800 mh:text-[30px]">
            Payment Status: <span className="text-customGreen">PAID</span>
          </p>
          <p className="text-xs text-gray-800 mh:text-[26px] mh:mt-4">
            <span>PAID:</span> ₹499
          </p>
          <p className="text-xs -mt-0.5 text-gray-800 mh:text-[26px] mh:mt-3">
            <span>Pending:</span> ₹0
          </p>
        </div>

        <button  onClick={() => navigate("/checkIn5",{state:{appointment}})} className="mt-6 py-2 text-white bg-customBlue text-[14px] rounded-md w-full mh:text-[30px] mh:py-4">
          Enter Queue
        </button>
      </div>

      {/* <div className="flex justify-between mt-[25vh] mh:mt-[29vh]">
        <div className="ml-10 mh:ml-24">
          <div className="flex justify-center items-center p-2 bg-[#fff] text-white rounded font-semibold text-sm w-[14vh] h-[5vh] mt-[3vh] bg-customBlue border border-customGray mh:text-3xl mh:rounded-xl mh:mt-[3vh]">
            Back to start
          </div>
        </div>
        <div className={"flex mt-[6vh] mr-9 mh:mt-[6vh] mh:mr-24"}>
          <img className="w-[12vh]" src="./assets/images/footer.webp" />
        </div>
      </div> */}
      <FooterS/>
    </div>
  );
};

export default CheckIn4;
