import React from "react";

const Flow = (props) => {
  const { width, highlightIndices } = props;

  const values = [
    "Select OPD",
    "Select Doctor",
    "Book appointment",
    "Patient Registration",
    "Payment",
  ];

  return (
    <div>
      <div className="flex text-[10px] mh:text-[28px] gap-6 mh:mt-[16px] py-[4px] items-center font-dmsans font-thin text-white text-center">
        {values.map((value, index) => (
          <div
            key={index}
            className={`${highlightIndices.includes(index) ? "text-[#16CDE1]" : ""}`}
          >
            {value=="Select OPD"?<div className="flex flex-col">
              <div>Select </div>
              <div>OPD </div>
            </div>:value}
            
          </div>
        ))}
      </div>
      <div className="mh:mt-8">
        <div className="bg-white rounded-[50px]">
          <div
            className={`bg-[#16CDE1] rounded-[50px] h-[10px] mh:h-[35px] ${width}`} // Dynamically apply width classes
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Flow;
