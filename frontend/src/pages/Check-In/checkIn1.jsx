import React, { useEffect,useRef } from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import { X } from 'lucide-react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useNavigate } from 'react-router-dom';
import FooterS from '../../components/Footer/FooterS';
const API_URL = import.meta.env.VITE_API_URL; 
const formSchema = z.object({
  
  id: z.string().min(1, "ID is required"), 
})

const CheckIn1 = () => {

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


  const [id, setId] = useState(""); 
  const [otpCard, setOtpCard] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const[OTPError,setOTPError]=useState("")
  const inputRefs = useRef([]);

  
  const handleChange = (index, event) => {
   
    const { value } = event.target;

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (!/^\d*$/.test(value)) {
      event.target.value = '';
    }
   
  };

  
  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !event.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };




  













  const [popUp,setPopUp]=useState(false)
  const navigate = useNavigate();
    const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      
      id: "",
      
    },
  })



  const validateOTP=async()=>{
    const otpnumber = otp.join('');
    console.log("K",otpnumber)
    if(!otpnumber){
      setOTPError("Pleae enter otp")
      return
    }
    const patientId = id
    const values = {
      id

    }


    
    const response = await fetch(`${API_URL}/patient/validateotp`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(
        {otp:otpnumber,patientId}
      )
    })
    const data = await response.json()
    
    if(response.ok){
      console.log(data.message)
      navigate('/checkIn3',{state:{values}})

    }
    else{
      setOTPError(data.message)
    }

  }




async function  onSubmit(values) {


  



  setId(values.id)
  const patientId = values.id
  if(!patientId){
    
    return 
  }
    const response = await fetch(`${API_URL}/patient/signin`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(
        {patientId}
      )
    })
    const data = await response.json()
    console.log(data)
    if(response.ok){
    // navigate('/checkIn2',{state:{values}})}
    
    setOtpCard(true)
    // const otpnumber = otp.join('');
    // console.log(otpnumber)
  }
    else{
      
           setPopUp(true)
    }

  }


  

  
  return (
      <div className="relative  bg-hero p-3  h-screen bg-cover bg-center" style={{ height: "calc(var(--vh) * 100)" }}>
         {popUp  && <div className="fixed flex justify-center flex-col items-center top-0 left-0 w-full h-full  bg-[#0000003b] ">
              
      
             
      
              <div className="bg-white relative rounded-[50px] p-10 shadow">
              <div className="absolute top-5 right-5 cursor-pointer z-[1000]" onClick={() => setPopUp(false)}> <X size={20} /></div>
              <div className="bg-white relative z-50 mh:text-[52px] text-black  font-[600] text-center mh:rounded-[16px] ">
                Patient is not registered
              </div>
              <div className="relative z-50">
              <Button  onClick={()=>{navigate("/walkin1")}} className="w-full rounded-[3px] mt-4 text-md bg-gradient-to-r from-customBlue from-35% to-customCyan h-9 mh:h-20 mh:text-4xl mh:bg-gradient-to-r mh:from-customBlue mh:from-40% mh:to-customCyan mh:mt-8 mh:mb-3 mh:rounded-lg">
                Book an Appointment and Register
              </Button>
            </div>
      
            </div>
              </div>}
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
      <div className="text-white font-semibold">
        <div className="text-2xl mh:text-5xl">welcome to</div>
        <div className="text-3xl  mh:text-7xl mh:mt-4">
          Narayana Eye Hospital OPD
        </div>
      </div>
      <div className=" mt-[50px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="bg-white rounded-lg p-4 mh:p-9 mh:rounded-2xl"
          >
            <div className="font-semibold text-xl mh:text-5xl">Welcome ! </div>
            <div className="text-xs mt-2 mh:text-3xl mh:mt-[30px]">
              Enter your Patient ID to confirm.
            </div>
            
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <div className="-mb-1 mt-4 mh:mt-12 mh:mb-3">
                    <FormLabel className="text-black text-xs mh:text-3xl">
                      Patient ID/ Phone No.
                    </FormLabel>
                  </div>
                  <FormControl>
                    <Input
                    disabled={otpCard}
                      className="border border-black text-xs font-semibold h-8 mh:text-3xl mh:px-7 mh:py-10 mh:rounded-xl"
                      placeholder="Type your Patient ID"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end text-sm items-end  text-gray-800 mt-1 mh:mt-6">
              Forgot Patient ID ?
            </div>



            {otpCard&&<div>


            <div className="text-[10px] mh:text-[24px]6">
             Enter the OTP sent to the registered number.
            </div>
            <div className="text-sm mh:text-[19px]">Resend OTP</div>

            <div className="grid grid-cols-4 px-16 gap-3 mh:gap-10 mh:px-32 mt-2">
      {Array(4)
        .fill("")
        .map((_, index) => (
          <input
            key={index}
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength="1"
            ref={(el) => (inputRefs.current[index] = el)}
            className="border border-black rounded-md w-[40px] my-2  h-[40px] mh:w-[100px] mh:h-[100px] mh:rounded-2xl text-center text-xl"
            onChange={(event) => handleChange(index, event)}
            onKeyDown={(event) => handleKeyDown(index, event)}
          />
        ))}
    </div>
    {OTPError&&<div className='text-red-500 text-sm my-2 text-center'>{OTPError}</div>}
    
    </div>}




            {otpCard?
              <Button onClick={validateOTP}   className="w-full py-4 rounded-none mt-2 text-sm bg-gradient-to-r from-customBlue from-35% to-customCyan h-7 mh:h-20 mh:text-4xl mh:bg-gradient-to-r mh:from-customBlue mh:from-40% mh:to-customCyan mh:mt-14 mh:mb-3">
              SUBMIT OTP    
                </Button>
                :
                <Button type="submit"   className="w-full py-4 rounded-none mt-4 text-sm bg-gradient-to-r from-customBlue from-35% to-customCyan h-7 mh:h-20 mh:text-4xl mh:bg-gradient-to-r mh:from-customBlue mh:from-40% mh:to-customCyan mh:mt-14 mh:mb-3">
              Generate OTP    
                </Button>
            }
           
             



    










          </form>
        </Form>

      </div>


     

      {/* <div className="flex justify-between mt-24 mh:mt-44">
        <div className="ml-10 mh:ml-24">
          <div
            className={
              "flex justify-center items-center p-2 bg-[#fff] text-white rounded font-semibold text-sm w-[14vh] h-[5vh] mt-[3vh] bg-customBlue border border-customGray mh:text-3xl mh:rounded-xl mh:mt-[3vh]"
            }
          >
            Back to start
          </div>
        </div>
        <div className={"flex mt-[6vh] mr-9 mh:mt-[6vh] mh:mr-24"}>
          <img className="w-[12vh]" src="/images/footer.webp" />
        </div>
      </div> */}
      <FooterS back="true" />
    </div>
  );
}

export default CheckIn1;
