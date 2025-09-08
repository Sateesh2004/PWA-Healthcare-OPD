import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },   // UUID
  patientName: { type: String, required: true },
  patientId: { type: Number, required: true, unique: true },
  patientPhone: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  dob: { type: String, required: true }, // you can use Date type instead
  address: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("Patient", patientSchema);
