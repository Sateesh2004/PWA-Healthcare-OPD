import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  patientPhone: { type: String, required: true },
  patientId: { type: Number, required: true },
  doctorid: { type: String, required: true },
  doctorname: { type: String, required: true },
  doctorcategory: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: String, required: true }, // you can use Date type also if needed
  paymentstatus: { type: String, enum: ["Paid", "Unpaid"], default: "Unpaid" },
  appid: { type: String, unique: true, required: true },
  status: { type: String, default: "pending" },
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model("Appointment", appointmentSchema);
