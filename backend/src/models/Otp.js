import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  otp: { type: Number, required: true },
  patientId: { type: String, required: true }
});

const Otp = mongoose.model("Otp", otpSchema);
export default Otp;
