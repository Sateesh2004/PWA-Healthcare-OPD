import React from "react";
import { GoClock } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

function DoctorCard(props) {
  const selectedCategory = props.doctorsData.find(
    (category) => category.category === props.categoryName
  );

  const doctors = selectedCategory ? selectedCategory.doctors : [];
  const navigate = useNavigate();

  const handleNavigate = (doctorid) => {
    const doctors = props.doctorsData;
    navigate('/walkin3', { state: { doctorid, doctors } });
  };

  // helper: convert "4:30pm" → minutes since midnight
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

  // helper: get doctor availability + next slot
  const getDoctorAvailability = (doctor) => {
    const today = new Date();
    const todayStr = today.toISOString().split("T")[0]; // e.g. "2025-09-05"
    const nowMinutes = today.getHours() * 60 + today.getMinutes();

    const todaySlot = doctor.availabledateslots.find(
      (slot) => slot.date === todayStr
    );

    if (!todaySlot) return { available: false, nextTime: null };

    const futureSlots = todaySlot.timeslots.filter(
      (time) => parseTimeToMinutes(time) > nowMinutes
    );

    if (futureSlots.length > 0) {
      return { available: true, nextTime: futureSlots[0] }; // earliest upcoming slot
    }

    return { available: false, nextTime: null };
  };

  return (
    <div className="mh:mx-16">
      {doctors.map((doctor, index) => {
        const { available, nextTime } = getDoctorAvailability(doctor);

        return (
          <div key={index}>
            <div className="bg-white mh:rounded-[20px] rounded-lg mh:p-4 p-2 mt-4">
              <div className="flex md:flex-row gap-4">
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
                      <div className="grid">
                        <span className="mh:text-[23px] mb-2 mh:mb-0 text-[10px] text-[#8696bb] font-poppins">
                          {props.categoryName} Doctor
                        </span>
                        <span className="mh:text-[21px] text-[9px] mh:mt-3 font-bold font-poppins text-customGreen">
                          {available
                            ? `Available Today`
                            : "Not Available Today"}
                        </span>
                      </div>
                      <div className="grid grid-col mh:-mt-5 -mt-2">
                        <span className="mh:text-[23px] text-[10px] text-blue-400 flex">
                          <GoClock className="mh:text-[28px] text-[12px]" />
                          <span className="mh:-mt-1 -mt-0.5 mh:ml-2 ml-1">
                            {doctor.openingtime} - {doctor.closingtime}
                          </span>
                        </span>
                        <span className="mh:text-[23px] text-[10px] mh:mt-3 text-yellow-400 flex">
                          <CiClock2 className="mh:text-[28px] text-[12px]" />
                          <span className="mh:-mt-1 -mt-0.5 mh:ml-2 ml-1">
                            {doctor.waitingpatients}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => handleNavigate(doctor.id)}
                className="flex hover:cursor-pointer justify-center text-[10px] rounded-sm items-center bg-customBlue mt-2 font-light font-dmsans text-white mh:p-4 p-1.5 mh:rounded-lg mh:text-[24px]"
              >
                Book Appointment
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DoctorCard;
