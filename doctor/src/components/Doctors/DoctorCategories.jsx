import React from 'react'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button'
import category from '../../assets/images/doctors_category.svg'

const DoctorCategories = () => {
  const [doctorsData, setDoctorsData] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{

        const fetchData = async ()=>{
            const response = await fetch("https://pwa-healthcare-opd-12.onrender.com//doctors");
            const data = await response.json();
            setDoctorsData(data);
            console.log(doctorsData)
        }
        fetchData();
    },[])

    const handleNavigate = (categoryName) => {
        navigate('/walkin2', { state: {categoryName, doctorsData } });
      };




 

  return (
    <div className="grid max-h-[50vh] overflow-y-scroll  grid-cols-2 mh:mt-9   mh:gap-10 text-black gap-3">
            
              {doctorsData.map((doctor,index) => (
            <div key={index} className='bg-white rounded-[12px] mh:p-4 mh:w-[100%] mh:h-[396.12px]'>
                <img src={category} alt="" className='w-[100%]' />
                <h1 className='mh:text-[32px] font-[700] text-[34.81px]'>{doctor.category}</h1>
                <p className='text-[20.89px] font-[500]'>For {doctor.category=="Speciality"?"specialist":doctor.category} doctor consultation</p>
                <Button onClick={() => handleNavigate(doctor.category)} className='bg-customBlue m-auto focus:bg-customBlue block rounded-[12px] h-[47.25px] text-[20.89px] w-full mh:mt-5'>
                  Select OPD
                </Button>
              </div>
           ))}
              
            
          </div>
  )
}

export default DoctorCategories
