import React from 'react'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button'
import category from '../../assets/images/doctors_category.svg'
const API_URL = import.meta.env.VITE_API_URL; 
const DoctorCategories = () => {
  const [doctorsData, setDoctorsData] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{

        const fetchData = async ()=>{
            const response = await fetch(`${API_URL}/doctors`);
            const data = await response.json();
            console.log(data)
            setDoctorsData(data);
            console.log(doctorsData)
        }
        fetchData();
    },[])

    const handleNavigate = (categoryName) => {
        navigate('/walkin2', { state: {categoryName, doctorsData } });
      };




 

  return (
    <div className="grid max-h-[40vh] mac:max-h-[60vh] mac:mt-4 overflow-y-scroll  grid-cols-2 mh:mt-9   mh:gap-10 text-black gap-3">
            
              {doctorsData.map((doctor,index) => (
            <div key={index} className='bg-white p-1 rounded-md mh:p-4  mh:h-[396.12px]'>
                <img src={category} alt="" className='rounded-md' />
                <h1 className='mh:text-[32px] font-[700] text-md'>{doctor.category} OPD</h1>
                <p className='text-[10px] mac:text-[12px] mac:h-[35px]'>For {doctor.category} doctor consultation</p>
                <button onClick={() => handleNavigate(doctor.category)} className='text-[10px] mac:text-[12px] text-white bg-customBlue m-auto block  py-1 px-4 rounded-md w-full' >
                  Select OPD
                </button>
              </div>
           ))}
              
            
          </div>
  )
}

export default DoctorCategories
