import { Router } from "express";
import { getAppointment,createAppointment,getAppointments } from "../controllers/appointmentController.js";
const appointmentRoutes = Router();
appointmentRoutes.get("/:patientId",getAppointment)
appointmentRoutes.post("/createAppoinment",createAppointment)
appointmentRoutes.get("/appointments/:patientId",getAppointments)
export default appointmentRoutes