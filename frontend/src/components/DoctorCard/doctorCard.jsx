import React from "react";
import { GoClock } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
function DoctorCard(props) {
  console.log(props.categoryName);
  console.log(props.doctorsData);
  const selectedCategory = props.doctorsData.find(
    (category) => category.category === props.categoryName
  );

  const doctors = selectedCategory ? selectedCategory.doctors : [];
    

  const navigate = useNavigate();


  const handleNavigate = (doctorid) => {
    const doctors = props.doctorsData
    navigate('/walkin3', { state: {doctorid,doctors} });
  };

  return (
    
<div className="   mh:mx-16">
 { doctors.map((doctor,index)=>(
    <div key={index}>
        <div className="bg-white mh:rounded-[20px] rounded-lg mh:p-4 p-2   mt-4 ">
      <div className="flex  md:flex-row gap-4">
         <img
           src="./assets/images/doctor-profile.webp"
           alt="Doctor"
           className="w-[68px] rounded-lg md:w-[170px] h-[56px] md:h-[152px] mh:rounded-2xl"
         />
         <div className="flex flex-col gap-4">
           <div className="flex flex-col mh:gap-3 gap-0.5">
             <h2 className="text-[12px] mh:text-[30px] font-bold font-poppins text-[#1c1c1c]">
             {doctor.name}
             </h2>
             <div className="flex mh:gap-x-44 gap-x-10">
               <div className="grid ">
                  <text className="mh:text-[23px] mb-2 mh:mb-0 text-[10px] text-[#8696bb] font-poppins">
                  {props.categoryName} Doctor
                  </text>
                  <text className="mh:text-[21px] text-[9px] mh:mt-3 font-bold font-poppins  text-customGreen">
                  {doctor.availability ? 'Available Today' : 'Not Available Today'}
                  </text>
                </div>
                <div className="grid grid-col mh:-mt-5 -mt-2">
                  <text className="mh:text-[23px] text-[10px] text-blue-400 flex ">
                    <GoClock className="mh:text-[28px] text-[12px]" />
                    <text className="mh:-mt-1 -mt-0.5 mh:ml-2 ml-1">
                    {doctor.openingtime} - {doctor.closingtime}
                    </text>
                  </text>
                  <text className="mh:text-[23px] text-[10px] mh:mt-3 text-yellow-400 flex">
                    <CiClock2 className="mh:text-[28px] text-[12px]" />
                    <text className="mh:-mt-1 -mt-0.5 mh:ml-2 ml-1">
                      {doctor.waitingpatients}
                    </text>
                  </text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => handleNavigate(doctor.id)} className="flex hover:cursor-pointer justify-center text-[10px] rounded-sm items-center bg-customBlue mt-2 font-light font-dmsans text-white mh:p-4 p-1.5 mh:rounded-lg mh:text-[24px]  ">
          Book Appointment
        </div>
      </div> 
    </div>
  ))}
   
    
</div>
    

    


    
  );
}

export default DoctorCard;
