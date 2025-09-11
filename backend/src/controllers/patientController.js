import Patients from "../models/patientRegistration.json" with { type: "json" };
import OTP from "../models/Otp.json" with { type: "json" };
import Doctors from "../data/Doctors.json" with { type: "json" };
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import {save} from '../utils/save.js';
import { fileURLToPath } from "url";
import Appointment from "../models/Appointment.js";
import Otp from "../models/Otp.js";
import Patient from "../models/patientRegistration.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const register = async (req, res) => {
  console.log("came to register")
  try {
    const bodyLength = Object.keys(req.body).length;

    // CASE 1: Appointment booking for an existing patient
    if (bodyLength === 4) {
      console.log("1")
      const { patientId, doctorid, time, date } = req.body;

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
};



// ✅ Signin → Generate OTP
export const signin = async (req, res) => {
  try {
    const { patientId } = req.body;
    console.log("signin request for:", patientId);

    // Find patient by phone or patientId
    const patient = await Patient.findOne({
      $or: [{ patientPhone: patientId }, { patientId: patientId }]
    });

    if (!patient) {
      return res.status(401).send({ message: "failed" });
    }

    // Generate OTP (hardcoded for now, can randomize later)
    const otp = 2222;

    // Save OTP in DB
    const otpData = new Otp({ otp, patientId });
    await otpData.save();

    console.log("OTP saved:", otpData);
    return res.send({ message: "success", otp });
  } catch (err) {
    console.error("❌ Error in signin:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};

// ✅ OTP Validator
export const otpValidator = async (req, res) => {
  try {
    const { otp, patientId } = req.body;

    // Find OTP entry in DB
    const otpEntry = await Otp.findOne({ otp, patientId });

    if (!otpEntry) {
      return res.status(401).send({ message: "Wrong OTP" });
    }

    // OTP is correct → (optional) delete it after successful use
    await Otp.deleteOne({ _id: otpEntry._id });

    return res.send({ message: "success" });
  } catch (err) {
    console.error("❌ Error in otpValidator:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};




export const getPatient = async (req, res) => {
  try {
    const { patientNumber } = req.params;
    console.log("get patient:", patientNumber);

    // ✅ Find patient by phone number
    const patient = await Patient.findOne({ patientPhone: patientNumber });

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    console.log("got patient:", patient.patientName);
    return res.json(patient);
  } catch (err) {
    console.error("❌ Error fetching patient:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};
  


export const updatePatient = async (req, res) => {
  const filePath = path.resolve(__dirname, "../models/",'patientRegistration.json');
  // const loadPatients = () => {
  //   const data = fs.readFileSync(filePath, 'utf-8');
  //   return JSON.parse(data);
  // };
  const {patientName, patientPhone, gender, dob, address,patientId } = req.body;

  for(let i=0;i<Patients.length;i++){
    if(Patients[i].patientId==patientId){
      Patients[i].patientName=patientName
      Patients[i].patientPhone=patientPhone
      Patients[i].gender=gender
      Patients[i].dob=dob
      Patients[i].address=address
      fs.writeFileSync(filePath, JSON.stringify(Patients, null, 2));
      return res.send({message:"success"})
      
    }
  }
  return res.status(401).send({message:"failed"})

  
 
}