import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const doctor = location.state?.doctor;

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch doctor appointments
  useEffect(() => {
    const fetchAppointments = async () => {
      if (!doctor?.id) return;

      try {
        const res = await fetch(`http://localhost:3000/doctors/${doctor.id}/appointments`);
        const data = await res.json();

        if (res.ok) {
          setAppointments(data.appointments);
        } else {
          console.error("Failed to fetch appointments:", data.message);
        }
      } catch (error) {
        console.error("Error fetching appointments:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [doctor?.id]);

  if (!doctor) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600 text-lg">No doctor data found. Please login again.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EBF6F9] flex flex-col">
        <div className="p-4" >
      

      <header className="flex  gap-16  justify-between" >
        <div className="w-[70%] bg-white border rounded-lg  p-4" >
            <div className="font-bold text-xl" >Hello {doctor.name}</div>
            <div className="" >{doctor.category}</div>
            </div>
        <div className="bg-white border rounded-lg w-[30%] leading-[50px] p-4" >Hospital Logo</div>
      </header>

      {/* Content */}
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="md:col-span-1 bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-indigo-200 flex items-center justify-center text-3xl font-bold text-indigo-700">
              {doctor.name.charAt(0)}
            </div>
            <h2 className="mt-4 text-xl font-semibold text-gray-800">{doctor.name}</h2>
            <p className="text-gray-500">{doctor.category}</p>
            <p className="mt-2 text-sm">
              {doctor.availability ? (
                <span className="text-green-600 font-medium">Available ✅</span>
              ) : (
                <span className="text-red-600 font-medium">Not Available ❌</span>
              )}
            </p>
          </div>

          {/* Stats Cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-gray-600 font-medium mb-2">Working Hours</h3>
              <p className="text-lg font-semibold text-indigo-700">
                {doctor.openingtime} - {doctor.closingtime}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-gray-600 font-medium mb-2">Waiting Patients</h3>
              <p className="text-lg font-semibold text-indigo-700">{doctor.waitingpatients}</p>
            </div>
          </div>

          {/* Available Slots */}
          <div className="md:col-span-3 bg-white rounded-2xl shadow p-6">
            <h3 className="text-gray-800 font-semibold mb-4 text-lg">Available Slots</h3>
            <div className="space-y-6">
              {doctor.availabledateslots.map((slot, index) => (
                <div key={index}>
                  <p className="font-medium text-indigo-600">{slot.date}</p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {slot.timeslots.map((time, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-full text-sm font-medium shadow-sm"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Appointments Section */}
          <div className="md:col-span-3 bg-white rounded-2xl shadow p-6">
            <h3 className="text-gray-800 font-semibold mb-4 text-lg">Appointments</h3>
            {loading ? (
              <p className="text-gray-500">Loading appointments...</p>
            ) : appointments.length === 0 ? (
              <p className="text-gray-500">No appointments found.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-indigo-50 text-left text-sm font-medium text-gray-600">
                      <th className="p-3 border">Patient</th>
                      <th className="p-3 border">Phone</th>
                      <th className="p-3 border">Date</th>
                      <th className="p-3 border">Time</th>
                      <th className="p-3 border">Payment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((appt) => (
                      <tr
                        key={appt.appid}
                        className="text-sm text-gray-700 hover:bg-gray-50 transition"
                      >
                        <td className="p-3 border">{appt.patientName}</td>
                        <td className="p-3 border">{appt.patientPhone}</td>
                        <td className="p-3 border">{appt.date}</td>
                        <td className="p-3 border">{appt.time}</td>
                        <td
                          className={`p-3 border font-medium ${
                            appt.paymentstatus === "Paid"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {appt.paymentstatus}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
      </div>
    </div>
  );
};

export default HomePage;
