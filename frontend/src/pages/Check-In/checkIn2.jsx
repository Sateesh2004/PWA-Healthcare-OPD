import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FooterS from "../../components/Footer/FooterS";

const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
  id: z.string().min(1, "Id is required"),
});







  







const CheckIn2 = () => {

  const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", ""]);
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
  const location = useLocation();
  
  const username = location.state.values.username
  const id = location.state.values.id
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: username,
      id: id,
    },
  });

 async function onSubmit(values) {
    
    const otpnumber = otp.join('');
    console.log(otpnumber)


    const patientId = values.id
    const response = await fetch("https://pwa-healthcare-opd-12.onrender.com/patient/validateotp",{
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
      alert(data.message)
    }
  }

  return (
    <div className="bg-hero bg-cover bg-center h-screen">
      <div className={"flex justify-between pt-4 mh:mr-4 mh:ml-14 pl-12"}>
        <FaRegCircleUser
          className={"text-white text-xl mt-1 mh:text-5xl mh:mt-8"}
        />
        <img
          className={"w-[14vh] mr-4 mh:w-[15vh] mh:mt-4"}
          src="/images/logo.png"
        />
      </div>
      <div className="text-white font-semibold -ml-3 mh:ml-6">
        <div className="text-2xl pl-12 mh:text-5xl">welcome to</div>
        <div className="text-3xl pl-12 mh:text-7xl mh:mt-4">
          Narayana Eye Hospital OPD
        </div>
      </div>
      <div className="px-[40px] mt-[110px] mh:mt-[197px] mh:px-[5vh] ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="bg-white rounded-lg p-4 mh:p-9 mh:rounded-2xl"
          >
            <div className="font-semibold text-xl mh:text-5xl">Welcome ! </div>
            <div className="text-xs mt-2 mh:text-3xl mh:mt-[30px]">
              Enter Your Patient Name And Patient ID to confirm
            </div>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="mt-4 mh:mt-20">
                  <div className="-mb-1 mh:mb-3">
                    <FormLabel className="text-black text-xs mh:text-3xl">
                      Patient Name
                    </FormLabel>
                  </div>
                  <FormControl>
                    <Input
                      className="border border-black text-xs font-semibold h-8 mh:text-3xl mh:px-7 mh:py-10 mh:rounded-xl"
                      placeholder="Type your name"
                      disabled
                      {...field}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                      className="border border-black text-xs font-semibold h-8 mh:text-3xl mh:px-7 mh:py-10 mh:rounded-xl"
                      placeholder="Type your Patient ID"
                      disabled
                      {...field}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end items-end text-[8px] mh:text-[19px] text-gray-800 mt-1 mh:mt-6">
              Forgot Patient ID ?
            </div>
            <div className="text-[10px] mh:text-[24px]6">
              ENTER OTP SENT ON THE REGISTRED NO.
            </div>
            <div className="text-[8px] mh:text-[19px]">resend otp</div>

            <div className="grid grid-cols-4 px-16 gap-3 mh:gap-10 mh:px-32 mt-2">
      {Array(4)
        .fill("")
        .map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            ref={(el) => (inputRefs.current[index] = el)}
            className="border border-black rounded-md w-[40px] pl-2 h-[40px] mh:w-[100px] mh:h-[100px] mh:rounded-2xl text-center text-xl"
            onChange={(event) => handleChange(index, event)}
            onKeyDown={(event) => handleKeyDown(index, event)}
          />
        ))}
    </div>

            <Button className="w-full rounded-none mt-4 text-sm bg-gradient-to-r from-customBlue from-35% to-customCyan h-7 mh:h-20 mh:text-4xl mh:bg-gradient-to-r mh:from-customBlue mh:from-40% mh:to-customCyan mh:mt-14 mh:mb-3">
              Login
            </Button>
          </form>
        </Form>
      </div>

      <FooterS/>
    </div>
  );
};

export default CheckIn2;
