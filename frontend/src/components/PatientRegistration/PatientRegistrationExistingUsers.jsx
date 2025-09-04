import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {X} from 'lucide-react'
import { useNavigate } from "react-router-dom";
const PatientRegistrationExistingUsers = (props) => {
  const navigate = useNavigate();
  const [popUp,setPopUp]=useState(false)
  const { doctorid, date,time,patientNumber,category } = props;
   console.log(props)
  const [formData, setFormData] = useState({ patientId: ''
    ,
    doctorid:'',
    time:'',    
    date:''
   });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value,doctorid:doctorid,
      time:time,
      date:date });
    

  };

  const  handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.patientId.trim()) {
      validationErrors.patientId = "Patient ID is required.";
      setErrors(validationErrors);
      return
    }


    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data Submitted:", formData);
    }
    const response =await fetch("http://localhost:3000/patient/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if(response.ok){
      const result =await response.json();
      console.log(result)
      const patientNumber = result.patientPhone
      navigate('/walkin5',{state:{patientNumber,category}});

    }else{
      const result = await response.json();
      setPopUp(true)
      console.log(result);
    }
  };

  return (
    <div className="mh:mt-20 mt-10">
       {popUp  && <div className="fixed flex justify-center flex-col items-center top-0 left-0 w-full h-full  bg-[#0000003b] ">
              
      
             
      
              <div className="bg-white relative rounded-[50px] p-10 shadow">
              <div className="absolute top-5 right-5 cursor-pointer z-[1000]" onClick={() => setPopUp(false)}> <X size={50} /></div>
              <div className="bg-white relative z-50 mh:text-[52px] text-black  font-[600] mh:p-8 mh:rounded-[16px]  p-4 mx-2">
                Patient is not registered
              </div>
              <div className="mh:px-10 relative z-50 px-6">
              <Button  onClick={()=>{navigate("/walkin4",{state:{date, doctorid, time,}})}} className="w-full rounded-[3px] mt-4 text-md bg-gradient-to-r from-customBlue from-35% to-customCyan h-9 mh:h-20 mh:text-4xl mh:bg-gradient-to-r mh:from-customBlue mh:from-40% mh:to-customCyan mh:mt-8 mh:mb-3 mh:rounded-lg">
                Register Here
              </Button>
            </div>
      
            </div>
              </div>}
      <form
        onSubmit={handleSubmit}
        className="bg-white mh:p-8 mh:rounded-[16px] rounded-md p-4"
      >
        <div>
          <h1 className="mh:text-[52px] text-[20px] font-[600] ">
            Patient Registration
          </h1>
          <p className="mh:text-[30px] text-[11.5px] mh:mt-5 mt-1.5 font-[400]">
            Enter Your Patient ID to confirm
          </p>
        </div>
        <div className="mh:mt-12 mt-5">
          <div className="flex flex-col mh:gap-1 mt-1.5">
            <label className="mh:text-[29px] text-[12px] mh:font-[600]">
              Patient ID
            </label>
            <input
              type="text"
              name="patientId"
              value={formData.patientId}
              onChange={handleInputChange}
              placeholder="Type your Patient ID"
              className="mh:px-6 mh:py-4 mh:text-[30px] text-[12px] px-2 py-1.5 rounded-sm mt-1 mh:rounded-[10px] border border-black"
            />
            {errors.patientId && (
              <span className="text-red-500 text-[32px] font-bold mt-1">
                {errors.patientId}
              </span>
            )}
          </div>
          <div className="flex justify-end items-end text-[8px] text-gray-800 mt-1 mh:mt-6 mh:text-[23px]">
            Forgot Patient ID ?
          </div>
        </div>
        <Button className="w-full rounded-[3px] mt-4 text-md bg-gradient-to-r from-customBlue from-35% to-customCyan h-8 mh:h-20 mh:text-4xl mh:bg-gradient-to-r mh:from-customBlue mh:from-40% mh:to-customCyan mh:mt-8 mh:mb-3 mh:rounded-lg">
          Login
        </Button>
      </form>
      <div className="mh:px-10 px-6">
        <Button className="w-full rounded-[3px] mt-4 text-md bg-gradient-to-r from-customBlue from-35% to-customCyan h-9 mh:h-20 mh:text-4xl mh:bg-gradient-to-r mh:from-customBlue mh:from-40% mh:to-customCyan mh:mt-8 mh:mb-3 mh:rounded-lg">
          Don't have an account
        </Button>
      </div>
    </div>
  );
};

export default PatientRegistrationExistingUsers;
