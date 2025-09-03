import React from 'react';

const AppointmentCard = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md border border-gray-300 p-6 w-full   mx-auto ">
      <div className="flex flex-row items-center min-w-full">
        <div className="flex flex-col items-center justify-center min-w-[180px] h-[180px] p-[30px] bg-gradient-to-r from-[#084B83] to-[#16CDE1] rounded-md ;
">

          <span className="text-[36px] font-semibold text-white leading-[27px] tracking-[0.73px]">
            8
          </span>
          <span className="text-[32px] font-medium text-white leading-[27px] tracking-[0.64px]">
            Tue
          </span>
          <span className="text-[32px] font-normal text-white leading-[27px] tracking-[0.64px]">
            July
          </span>
        </div>

        <div className="flex flex-col ml-[40px]">
          <span className="text-[19px] font-bold text-[#272727] leading-[162%]">
            10:30 pm
          </span>
          <div className="mt-[10px]">
            <h2 className="text-[32px] font-bold text-[#272727] leading-[162%]">
              General OPD
            </h2>
            <p className="text-[24px] font-normal text-[#272727] leading-[162%]">
              DR. Malhar Sant
            </p>
          </div>
        </div>

        {/* Close Button */}
        <div className="ml-auto">
          <img 
            src="https://dashboard.codeparrot.ai/api/assets/Z4tSUq44F0YMkTdd" 
            alt="close" 
            className="w-[52px] h-[52px]"
          />
        </div>
      </div>

      {/* Appointment Details Section */}
      <div className="flex flex-col gap-6 w-full mt-6" style={{ minWidth: '320px' }}>
        {/* Title */}
        <h2 className="text-[32px] font-bold text-[#272727] font-['DM_Sans'] leading-[162%]">
          Appointment Details
        </h2>

        {/* Patient and Doctor Info */}
        <div className="flex flex-row justify-between gap-10 w-full flex-wrap">
          {/* Patient Information */}
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-medium text-[#272727] font-['DM_Sans'] leading-[162%]">
              Patient Name : Parth Dasare
            </p>
            <p className="text-2xl font-medium text-[#272727] font-['DM_Sans'] leading-[162%]">
              Patient ID : 034b
            </p>
            <p className="text-2xl font-medium text-[#272727] font-['DM_Sans'] leading-[162%]">
              Phone No : 7***459**0
            </p>
          </div>

          {/* Doctor Information */}
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-medium text-[#272727] font-['DM_Sans'] leading-[162%]">
              Doctor Name : DR. Malhar Sant
            </p>
            <p className="text-2xl font-medium text-[#272727] font-['DM_Sans'] leading-[162%]">
              Appointment date : 8/11/2024
            </p>
            <p className="text-2xl font-medium text-[#272727] font-['DM_Sans'] leading-[162%]">
              Appointment time : 10:30
            </p>
          </div>
        </div>

        {/* Reason of Visit */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[32px] font-bold text-[#272727] font-['DM_Sans'] leading-[162%]">
            Reason of Visit :
          </h3>
          <p className="text-2xl font-medium text-[#272727] font-['DM_Sans'] leading-[162%]">
            General Check-up
          </p>
        </div>

        {/* Payment Status */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[32px] font-bold text-[#272727] font-['DM_Sans'] leading-[162%]">
            Payment Status : <span className="text-unpaid">UNPAID</span>
          </h3>
          <p className="text-2xl font-medium text-[#272727] font-['DM_Sans'] leading-[162%]">
            PAID : ₹0
          </p>
          <p className="text-2xl font-medium text-[#272727] font-['DM_Sans'] leading-[162%]">
            Pending : ₹499
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-row items-center justify-center w-full min-w-full h-[75px] bg-[#084B83] rounded-[7.42px] px-[64.56px] py-[15px] mt-6">
        <button 
          className="text-white font-bold text-[30.02px] leading-[150%] tracking-[0.15010em] font-['DM_Sans']"
          onClick={() => {}}
        >
          Confirm And Pay
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
