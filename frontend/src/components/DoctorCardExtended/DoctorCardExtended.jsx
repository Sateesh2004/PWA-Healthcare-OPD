import React, { useState, useEffect } from "react";
import { GoClock } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function DoctorCardExtended(props) {
  const navigate = useNavigate();

  const { doctorid, doctors } = props;
  const [selectedTime, setSelectedTime] = useState(0);
  const [times, setTimes] = useState([]);

  const doctorInfo = doctors
    .flatMap((category) => category.doctors)
    .find((doctor) => doctor.id === doctorid);

  const [activeDate, setActiveDate] = useState(
    doctorInfo.availabledateslots[0].date
  );

  const timeSelector = (time, index) => {
    setSelectedTime(index);
  };

  const handleNavigate = () => {
    const time = times[selectedTime];
    const date = activeDate;
    const category = doctorInfo.category;
    navigate("/walkin4", { state: { doctorid, time, date, category } });
  };

  // 🔹 Fetch timings for selected date
  useEffect(() => {
    const getTiming = () => {
      for (const categories of doctors) {
        if (categories.category === doctorInfo.category) {
          for (let i = 0; i < categories.doctors.length; i++) {
            if (categories.doctors[i].id === doctorInfo.id) {
              const dates = categories.doctors[i].availabledateslots;
              for (let j = 0; j < dates.length; j++) {
                if (dates[j].date === activeDate) {
                  setTimes(dates[j].timeslots);
                }
              }
            }
          }
        }
      }
    };
    getTiming();
  }, [activeDate, doctorInfo.id, doctorInfo.category, doctors]);

  // 🔹 Helper to convert "4:30pm" -> minutes
  const parseTimeToMinutes = (timeStr) => {
    const match = timeStr.match(/(\d+):(\d+)?(am|pm)/i);
    if (!match) return 0;
    let hours = parseInt(match[1], 10);
    let minutes = parseInt(match[2] || "0", 10);
    const period = match[3].toLowerCase();
    if (period === "pm" && hours !== 12) hours += 12;
    if (period === "am" && hours === 12) hours = 0;
    return hours * 60 + minutes;
  };

  // 🔹 Find next available slot today
  const getNextAvailableSlot = () => {
    const today = new Date().toISOString().split("T")[0];
    const todaySlot = doctorInfo.availabledateslots.find(
      (slot) => slot.date === today
    );

    if (!todaySlot) return "Unavailable Today";

    const nowMinutes = new Date().getHours() * 60 + new Date().getMinutes();
    const futureSlots = todaySlot.timeslots.filter(
      (time) => parseTimeToMinutes(time) > nowMinutes
    );

    if (futureSlots.length > 0) {
      return `Available Today`;
    } else {
      return "No Slots Left Today";
    }
  };

  return (
    <div className="bg-white p-1.5 mh:rounded-[20px] rounded-lg mh:p-4 mh:mx-16 mt-3 ">
      <div className="flex md:flex-row gap-4">
        <img
          src="./assets/images/doctor-profile.webp"
          alt="Doctor"
          className="w-[68px] rounded-lg md:w-[170px] h-[56px] md:h-[152px] mh:rounded-2xl"
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col mh:gap-3 gap-0.5">
            <h2 className="text-[12px] mh:text-[16px] font-bold font-poppins text-[#1c1c1c]">
              {doctorInfo.name}
            </h2>
            <div className="flex mh:gap-x-44 gap-x-10">
              <div className="grid ">
                <text className="mh:text-[23px] mb-2 mh:mb-0 text-[10px] text-[#8696bb] font-poppins">
                  {doctorInfo.category}
                </text>
                <text className="mh:text-[21px] text-[9px] mh:mt-3 font-bold font-poppins  text-customGreen">
                  {getNextAvailableSlot()}
                </text>
              </div>
              <div className="grid grid-col mh:-mt-5 -mt-2">
                <text className="mh:text-[23px] text-[10px] text-blue-400 flex ">
                  <GoClock className="mh:text-[28px] text-[12px]" />
                  <text className="mh:-mt-1 -mt-0.5 mh:ml-2 ml-1">
                    {doctorInfo.openingtime} - {doctorInfo.closingtime}
                  </text>
                </text>
                <text className="mh:text-[23px] text-[10px] mh:mt-3 text-yellow-400 flex">
                  <CiClock2 className="mh:text-[28px] text-[12px]" />
                  <text className="mh:-mt-1 -mt-0.5 mh:ml-2 ml-1">
                    {doctorInfo.waitingpatients}
                  </text>
                </text>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Date Slots */}
      <div className="text-[12px] font-semibold mt-2 mh:text-[28px]">
        Available Date slots
      </div>
      <div className="text-[9px] font-semibold mt-1 mh:text-[22px] mh:mt-3">
        <h1 className="flex mt-1 text-[12px] gap-1 mh:mt-2 mh:gap-2">
          {(() => {
            const formatDate = new Date(activeDate);
            const day = formatDate.getDate();
            const monthName = formatDate.toLocaleString("en-US", {
              month: "short",
            });
            const dayName = formatDate.getFullYear();

            return (
              <>
                <div>{day}</div>
                <div>{monthName}</div>
                <div>{dayName}</div>
              </>
            );
          })()}
        </h1>
        <div className="flex mt-1 gap-2 mh:mt-2 mh:gap-4">
          {doctorInfo.availabledateslots.map((slot, index) => {
            const date = new Date(slot.date);
            const day = date.getDate();
            const weekday = date.toLocaleString("en-US", { weekday: "short" });
            const month = date.toLocaleString("en-US", { month: "short" });

            return (
              <div
                onClick={() => setActiveDate(slot.date)}
                key={index}
                className={`text-black hover:cursor-pointer text-center  flex items-center justify-center ${
                  activeDate === slot.date
                    ? "bg-[linear-gradient(89.99deg,_#084B83_-63.38%,_#16CDE1_124.88%)] text-white"
                    : "bg-white"
                } border border-gray-300 rounded-lg  px-6 py-1   mh:rounded-2xl`}
              >
                <div>
                  <div className="font-semibold  text-[12px] mh:text-[16px]">
                    {day}
                  </div>
                  <div className=" text-[12px] mh:text-[16px] font-semibold">
                    {weekday}
                  </div>
                  <div className=" text-[12px] mh:text-[16px] font-semibold">
                    {month}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Time Slots */}
      <div className="text-[12px] font-semibold mt-1 mh:text-[28px] mh:mt-2">
        Available Time slots
      </div>
      <div className="text-[12px] font-semibold mh:text-[22px]">
        <h1 className="flex mt-1 mh:text-[22px] gap-1 mh:mt-2 mh:gap-2">
          {(() => {
            const formatDate = new Date(activeDate);
            const day = formatDate.getDate();
            const monthName = formatDate.toLocaleString("en-US", {
              month: "short",
            });
            const dayName = formatDate.getFullYear();

            return (
              <>
                <div>{day}</div>
                <div>{monthName}</div>
                <div>{dayName}</div>
              </>
            );
          })()}
        </h1>

        <div className="flex  gap-x-4 gap-y-2 mt-1 mh:gap-x-10 mh:gap-y-6">
          {times.map((time, index) => (
            <div
              onClick={() => {
                timeSelector(time, index);
              }}
              className={`rounded-sm p-2  hover:cursor-pointer border border-gray-300  ${
                selectedTime == index
                  ? "bg-[linear-gradient(89.99deg,_#084B83_-63.38%,_#16CDE1_124.88%)] text-white"
                  : "bg-white text-black"
              }`}
              key={index}
            >
              {time}
            </div>
          ))}
        </div>
      </div>

      {/* Book Button */}
      <div className="border-t border-t-gray-300 mt-4">
        <div
          onClick={handleNavigate}
          className="mt-2 hover:bg-customBlue hover:text-white hover:cursor-pointer py-1 flex justify-center text-[12px] font-dmsans-500 font-semibold mh:text-[24px] mh:py-5"
        >
          Book Appointment
        </div>
      </div>
    </div>
  );
}

export default DoctorCardExtended;
