import React, { useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import Flow from '../../components/Flow/Flow';
import FooterS from '../../components/Footer/FooterS';

const Edit = () => {
    const location = useLocation()
    console.log(location.state)

    const newData = location.state.newData
    const category = location.state.category
    console.log(category)
    const [popUp,setPopUp]=useState(false)


  


  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    patientName: newData.patientName || '',
    patientPhone: newData.patientPhone || '',
    gender: newData.gender || '',
    dob: newData.dob || '',
    address: newData.address || '',
  });
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      
    });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let validationErrors = {};
    if (!formData.patientName.trim()) {
      validationErrors.patientName = 'Required';
    }
    if (!formData.patientPhone.trim()) {
      validationErrors.patientPhone = 'Required';
    } else if (!/^\d{10}$/.test(formData.patientPhone)) {
      validationErrors.patientPhone = 'Invalid phone number. Please enter a 10-digit number.';
    }
    if (!formData.gender.trim()) {
      validationErrors.gender = 'Required';
    }
    if (!formData.dob.trim()) {
      validationErrors.dob = 'Required';
    }
    

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try{
        const response = await fetch("http://localhost:3000/patient/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ ...formData, patientId: newData.patientId }),

        }); 

        if (response.ok) {
            const result = await response.json();        
            console.log(result)
            const patientNumber = formData.patientPhone
            navigate('/walkin5',{state:{patientNumber,category}})
        } 
        else{
            const result = await response.json();        
            console.log(result)
        }
    }
    catch(e){
        console.log(e)
    }
    

  };







  return (
    <div className="bg-hero bg-cover bg-center h-screen">
    {popUp  && <div className="fixed flex justify-center flex-col items-center top-0 left-0 w-full h-full  bg-[#0000003b] ">
      

     

      <div className="bg-white relative rounded-[50px] p-10 shadow">
      <div className="absolute top-5 right-5 cursor-pointer z-[1000]" onClick={() => setPopUp(false)}> <X size={50} /></div>
      <div className="bg-white relative z-50 mh:text-[52px] text-black  font-[600] mh:p-8 mh:rounded-[16px]  p-4 mx-2">
        Patient Already Exists
      </div>
      <div className="mh:px-10 relative z-50 px-6">
      <Button  onClick={()=>{navigate("/walkin4a",{state:{doctorid,date,time,category}})}} className="w-full rounded-[3px] mt-4 text-md bg-gradient-to-r from-customBlue from-35% to-customCyan h-9 mh:h-20 mh:text-4xl mh:bg-gradient-to-r mh:from-customBlue mh:from-40% mh:to-customCyan mh:mt-8 mh:mb-3 mh:rounded-lg">
        Sign In
      </Button>
    </div>

    </div>
      </div>}
      
      <div className={"flex   justify-between  pt-4 mh:mx-16"}>
          <div onClick={() => navigate(-1)} className="flex hover:cursor-pointer text-white mh:mt-6">
            <img
              className="w-3 h-4 mt-1.5 mr-1 mh:w-6 mh:h-9 mh:mr-3"
              src="./assets/images/vector.webp"
            />
            <div className="text-lg mh:text-[40px] mh:mt-2"> Back </div>
          </div>
          <img
            className={"w-[14vh] mr-4 mh:w-[13vh] mh:mt-4"}
            src="./assets/images/logo.webp"
          />
        </div>
        <div className=" mx-16   ">
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
    

    <form
      onSubmit={handleSubmit}
      className="bg-white  mh:p-8 mh:rounded-[16px] mh:mt-10 rounded-md p-4 mx-16 "
    >
      <div>
        <h1 className="mh:text-[52px] text-[20px] font-[600] ">
          Patient Registration
        </h1>
        <p className="mh:text-[30px] text-[11.5px] mh:mt-5 mt-1.5 font-[400]  ">
          Enter Your Patient Name And Other Details to register
        </p>
      </div>
      <div className="mh:mt-12 mt-5">
        <div className="flex flex-col mh:gap-1 mh:py-5">
          <label className="mh:text-[29px] text-[12px] font-[600]">
            Patient Id
          </label>
          <input
          disabled
            value={newData.patientId}
              name="patientId" type="text" placeholder="Type your Name"
            className="mh:px-6 mh:py-4 mh:text-[30px] text-[12px] px-2 py-1.5 rounded-sm mt-1 mh:rounded-[10px] border border-black "
          />
           {errors.patientName && <span className="text-red-500 text-3xl font-bold">{errors.patientName}</span>}
        </div>
        <div className="flex flex-col mh:gap-1 mh:py-5">
          <label className="mh:text-[29px] text-[12px] font-[600]">
            Patient Name
          </label>
          <input
            value={formData.patientName}
            onChange={handleChange}  name="patientName" type="text" placeholder="Type your Name"
            className="mh:px-6 mh:py-4 mh:text-[30px] text-[12px] px-2 py-1.5 rounded-sm mt-1 mh:rounded-[10px] border border-black "
          />
           {errors.patientName && <span className="text-red-500 text-3xl font-bold">{errors.patientName}</span>}
        </div>
        <div className="flex flex-col mh:gap-1 mt-1.5">
          <label className="mh:text-[29px] text-[12px] mh:font-[600]">
            Patient Phone Number
          </label>
          <input
            name="patientPhone" value={formData.patientPhone}
            onChange={handleChange} type="tel" placeholder="Type your Number"
            className="mh:px-6 mh:py-4 mh:text-[30px] text-[12px] px-2 py-1.5 rounded-sm mt-1 mh:rounded-[10px] border border-black "
          />
          {errors.patientPhone && <span className="text-red-500 text-3xl font-bold">{errors.patientPhone}</span>}
        </div>

        <div className="flex mh:gap-5 mh:my-5  gap-1 mt-1.5">
          {/* Gender Dropdown */}
          <div className="flex flex-col w-1/2 mh:gap-1">
            <label
              htmlFor="gender"
              className="mh:text-[29px] text-[12px] mh:font-[600]"
            >
              Gender
            </label>
            <select
              id="gender"
              placeholder="gender"
              name="gender" value={formData.gender}
              onChange={handleChange}
              className="mh:px-6 mh:py-4 mh:text-[30px] text-[12px] px-2 py-1.5 rounded-sm mt-1 mh:rounded-[10px] border border-black "
            >
              <option className="mh:text-[14px]" value="" disabled selected>
                Select your gender
              </option>
              <option className="mh:text-[14px]" value="Male">
                Male
              </option>
              <option className="mh:text-[14px]" value="Female">
                Female
              </option>
              <option className="mh:text-[14px]" value="Others">
                Other
              </option>
              <option className="mh:text-[14px]" value="Prefer not to say">
                Prefer not to say
              </option>
            </select>
            {errors.gender && <span className="text-red-500 text-3xl font-bold">{errors.gender}</span>}
          </div>

          {/* Date of Birth Input */}
          <div className="flex flex-col w-1/2 mh:gap-1 ">
            <label
              htmlFor="dob"
              className="mh:text-[29px] text-[12px] mh:font-[600]"
            >
              Date of Birth
            </label>
            <input name="dob" value={formData.dob}
              onChange={handleChange} type="date"  className='mh:px-6 mh:py-4 mh:text-[30px] text-[12px] px-2 py-1.5 rounded-sm mt-1 mh:rounded-[10px] border border-black '  />
              {errors.dob && <span className="text-red-500 text-3xl font-bold">{errors.dob}</span>}
          </div>
        </div>
        <div className="flex flex-col mh:gap-1 mt-1.5">
          <label className="mh:text-[29px] text-[12px] mh:font-[600]">
            Address
          </label>
          <textarea name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
className='mh:px-8 mh:py-2 mh:text-[42px] mh:mt-2 mh:rounded-[10px] border-[#232323]  mh:border-[2px] focus:outline-none'  />
{errors.address && <span className="text-red-500 text-3xl font-bold">{errors.address}</span>}
        </div>
      </div>
      <Button  type="submit" className="w-full rounded-[3px] mt-4 text-md bg-gradient-to-r from-customBlue from-35% to-customCyan h-8 mh:h-20 mh:text-4xl mh:bg-gradient-to-r mh:from-customBlue mh:from-40% mh:to-customCyan mh:mt-8 mh:mb-3 mh:rounded-lg">
        Confirm Patient info
      </Button>
    </form>
   <FooterS back={true}/>
  </div>
  )
}

export default Edit
