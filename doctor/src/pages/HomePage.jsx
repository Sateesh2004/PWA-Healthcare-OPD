import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL; 
const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const doctor = location.state?.doctor;

  const [activeTab, setActiveTab] = useState("to do");
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [appointments, setAppointments] = useState([]);

  // Convert time string ("10:30 AM" or "11:00pm") to minutes
  const timeToMinutes = (timeStr) => {
    let time = timeStr.trim().toUpperCase();
    const [hPart, mPart] = time.replace(/AM|PM/, "").trim().split(":");
    let hours = parseInt(hPart, 10);
    let minutes = mPart ? parseInt(mPart, 10) : 0;
    if (time.includes("PM") && hours !== 12) hours += 12;
    if (time.includes("AM") && hours === 12) hours = 0;
    return hours * 60 + minutes;
  };

  // Timeline range (8AM - 11PM)
  const startMinutes = timeToMinutes("08:00 AM");
  const endMinutes = timeToMinutes("11:59 PM");

  // Update current time every minute
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const mins = now.getHours() * 60 + now.getMinutes();
      setCurrentMinutes(mins);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Fetch appointments
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_URL}/doctors/${doctor.id}/appointments`
        );
        const result = await response.json();
        setAppointments(result.appointments || []);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
    fetchData();
  }, [doctor.id]);

  // Calculate position of current time line
  const getLinePosition = () => {
    if (currentMinutes < startMinutes || currentMinutes > endMinutes) return null;
    const totalMinutes = endMinutes - startMinutes;
    const percent = ((currentMinutes - startMinutes) / totalMinutes) * 100;
    return `${percent}%`;
  };

  const linePosition = getLinePosition();

  // Filter appointments by tab/status
  const filteredAppointments = appointments.filter((appt) => {
    if (activeTab === "to do" || activeTab === "in progress") {
      return appt.status === "pending";
    }
    if (activeTab === "completed") {
      return appt.status === "completed";
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#EBF6F9] flex flex-col">
      <div className="p-4">
        {/* Header */}
        <header className="flex gap-4 justify-between">
          <div className="w-[70%] flex gap-4 bg-white border rounded-lg p-2">
            <div className="bg-[#f7f3ff] border p-2 flex items-center justify-center rounded-full h-[54px] w-[70px]">
              <img className="rounded-full" src="/images/User_001.png" />
            </div>
            <div className="w-full">
              <div className="font-bold text-md">Hello {doctor.name}</div>
              <div>{doctor.category}</div>
            </div>
          </div>
          <div className="bg-white border rounded-lg w-[30%] leading-[50px] p-2">
            <img src="/images/blacl_logo.png" alt="" />
          </div>
        </header>

        {/* Schedule */}
        <div className="p-6 mt-4 bg-white border rounded-xl shadow-md max-w-2xl mx-auto relative">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Today's Schedule</h2>
              <p className="text-gray-500 text-sm">
                {activeTab === "completed" ? "Completed" : "Ongoing"}
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mt-4">
            {["To Do", "In Progress", "Completed"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-4 py-1 rounded-md text-sm font-medium ${
                  activeTab === tab.toLowerCase()
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative mt-6">
            <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            {/* Current time line */}
            {linePosition && (
              <div
                className="absolute left-0 right-0 flex items-center"
                style={{ top: linePosition }}
              >
                <div className="w-16 text-right pr-2 text-xs text-red-500 font-semibold">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
                <div className="flex-1 h-0.5 bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-red-500 ml-2"></div>
              </div>
            )}

            {/* Appointments */}
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((appt) => (
                <div key={appt.appid} className="relative flex items-start mb-6">
                  {/* Time indicator */}
                  <div className="w-20 text-right pr-4">
                    <span className="block font-semibold text-gray-600">
                      {appt.time}
                    </span>
                  </div>

                  {/* Timeline Dot */}
                  <div
                    className="absolute left-16 w-4 h-4 rounded-full border-4 bg-white border-gray-400"
                    style={{ transform: "translateX(-50%)" }}
                  ></div>

                  {/* Appointment Card */}
                  <div
                    className={`ml-10 w-full border-l-4 ${
                      appt.status === "completed"
                        ? "border-green-400 bg-green-50 text-green-600"
                        : "border-orange-400 bg-orange-50 text-orange-600"
                    } p-4 rounded-lg shadow-sm`}
                  >
                    <p className="text-sm font-semibold text-gray-700">
                      Patient: {appt.patientName} ({appt.patientPhone})
                    </p>
                    <h3 className="font-bold text-gray-800 mt-1">
                      {appt.doctorcategory}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Status: {appt.status}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm mt-4">No appointments</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
