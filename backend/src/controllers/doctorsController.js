import doctors from '../data/Doctors.json' with { type: 'json' };

import appointments from '../models/Appointment.json' with { type: 'json' };
export const getDoctors = async (req, res) => {
   
    try {
        
        return res.json(doctors); 
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something went wrong' });     }
    
  };

export const logInDoctor = async (req, res) => {
  console.log("login doctor");
  const { doctorId, password } = req.body;

  if (!doctorId || !password) {
    return res.status(400).json({ message: "Doctor ID and password are required" });
  }

  try {
    // Search for doctor in all categories
    let foundDoctor = null;

    for (const category of doctors) {
        console.log(category)
      const doctor = category.doctors.find(
        (doc) => doc.id === doctorId && doc.password === password
      );
      if (doctor) {
        foundDoctor = doctor;
        break;
      }
    }

    if (!foundDoctor) {
      return res.status(401).json({ message: "Invalid Doctor ID or Password" });
    }

    // Success response (excluding password for security)
    const { password: _, ...doctorWithoutPassword } = foundDoctor;

    return res.status(200).json({
      message: "Login successful",
      doctor: doctorWithoutPassword,
    });
  } catch (error) {
    console.error("Error logging in doctor:", error);
    return res.status(500).json({ message: "Server error" });
  }
};


export const getDoctorAppointments = async (req, res) => {
  const { id } = req.params;
  console.log("Fetching appointments for doctor ID:", id);

  try {
    // Get today's date in UTC (YYYY-MM-DD)
    const today = new Date().toISOString().split("T")[0];

    const doctorAppointments = appointments.filter((appt) => {
      if (!appt.created_at) return false; // skip if missing

      const parsedDate = new Date(appt.created_at);
      if (isNaN(parsedDate)) return false; // skip if invalid

      const apptDate = parsedDate.toISOString().split("T")[0];
      return appt.doctorid === id && apptDate === today;
    });

    return res.status(200).json({
      message: "Appointments fetched successfully",
      appointments: doctorAppointments,
    });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return res.status(500).json({ message: "Server error" });
  }
};


  