import Appointment from "../models/Appointment.js";

import { v4 as uuidv4 } from 'uuid';
import Patient from "../models/patientRegistration.js";

import Doctors from "../data/Doctors.json" with { type: "json" };
export const createAppointment = async (appointmentData) => {
  try {
    console.log("Creating Appointment:", appointmentData);

    const appointment = new Appointment(appointmentData);
    await appointment.save();

    console.log("✅ Appointment saved to MongoDB");
    return appointment;
  } catch (err) {
    console.error("❌ Error creating appointment:", err);
    throw err;
  }
};
export const getAppointment = async (req, res) => {
  try {
    const { patientId } = req.params;

    const appointment = await Appointment.findOne({ patientId })
      .sort({ created_at: -1 }); // fetch the latest appointment

    if (!appointment) {
      return res.status(404).json({ message: "No appointment found for this patient." });
    }

    return res.json(appointment);
  } catch (err) {
    console.error("❌ Error fetching appointment:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};


// ✅ Get All Appointments for a patient (by patientId or patientPhone)
export const getAppointments = async (req, res) => {
  console.log("fdhvdfg")
  try {
    const id = req.params.patientId;

    const patientAppointments = await Appointment.find({
      $or: [{ patientId: id }, { patientPhone: id }]
    });

    if (patientAppointments.length === 0) {
      return res.status(404).json({ message: "No appointments found for this patient." });
    }

    return res.status(200).json(patientAppointments);
  } catch (err) {
    console.error("❌ Error fetching appointments:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};



 
export const createImmediateAppointments = async (req, res) => {
  
     console.log("came to register")
       try {
         const bodyLength = Object.keys(req.body).length;
     
         // CASE 1: Appointment booking for an existing patient
         if (bodyLength === 4) {
           console.log("1")
           const { patientId, doctorid, time, date } = req.body;
           console.log(patientId,doctorid,time,date)
     
           // find patient in MongoDB
           const patient = await Patient.findOne({ patientId });
           if (!patient) {
             return res.status(404).json({ message: "Patient not found" });
           }
     
           // find doctor from JSON
           let doctorInfo = null;
           for (const category of Doctors) {
             for (const doc of category.doctors) {
               if (doc.id == doctorid) {
                 doctorInfo = doc;
                 break;
               }
             }
           }
           if (!doctorInfo) {
             return res.status(404).json({ message: "Doctor not found" });
           }
     
           // create appointment
           const uuid = uuidv4();
           const appointment = new Appointment({
             patientName: patient.patientName,
             patientPhone: patient.patientPhone,
             patientId: patient.patientId,
             doctorid: doctorInfo.id,
             doctorname: doctorInfo.name,
             doctorcategory: doctorInfo.category,
             time,
             date,
             paymentstatus: "Unpaid",
             appid: uuid,
             status: "pending",
             created_at: new Date()
           });
     
           await appointment.save();
           return res.json({ message: "Appointment created", patientPhone: patient.patientPhone });
         }
     
         // CASE 2: New patient registration + appointment
         else {
            console.log("2")
           const { patientName, patientPhone, gender, dob, address, doctorid, time, date } = req.body;
     
           // check if patient already exists
           const existing = await Patient.findOne({ patientPhone });
           if (existing) {
             return res.status(400).json({ message: "Patient already exists" });
           }
     
           // generate new patientId
           const count = await Patient.countDocuments();
           const patientId = count + 1;
           const uuid = uuidv4();
     
           // find doctor from JSON
           let doctorInfo = null;
           for (const category of Doctors) {
             for (const doc of category.doctors) {
               if (doc.id == doctorid) {
                 doctorInfo = doc;
                 break;
               }
             }
           }
           if (!doctorInfo) {
             return res.status(404).json({ message: "Doctor not found" });
           }
     
           // save patient in MongoDB
           const patient = new Patient({
             id: uuid,
             patientName,
             patientId,
             patientPhone,
             gender,
             dob,
             address
           });
           await patient.save();
     
           // save appointment in MongoDB
           const appointment = new Appointment({
             patientName,
             patientPhone,
             patientId,
             doctorid: doctorInfo.id,
             doctorname: doctorInfo.name,
             doctorcategory: doctorInfo.category,
             time,
             date,
             paymentstatus: "Unpaid",
             appid: uuidv4(),
             status: "pending",
             created_at: new Date()
           });
           await appointment.save();
     
           return res.json({ message: "Patient registered and appointment booked" });
         }
       } catch (err) {
         console.error("Error in register:", err);
         res.status(500).json({ message: "Server error", error: err.message });
       }
  
}