import { Router } from "express";
import { createImmediateAppointments } from "../controllers/appointmentController.js";
const immediateAppointmentRoutes = Router();
immediateAppointmentRoutes.post("/",createImmediateAppointments)
export default immediateAppointmentRoutes