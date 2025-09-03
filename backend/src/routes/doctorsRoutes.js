import { Router } from "express";
import { getDoctorAppointments, getDoctors, logInDoctor } from "../controllers/doctorsController.js";
const doctorRoutes = Router();
doctorRoutes.get("/",getDoctors)
doctorRoutes.post("/login",logInDoctor)
doctorRoutes.get("/:id/appointments", getDoctorAppointments);
export default doctorRoutes