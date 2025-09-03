import { Router } from "express";
import { register,signin,getPatient,updatePatient,otpValidator } from "../controllers/patientController.js";
const patientRoutes = Router();
patientRoutes.post("/registration",register)
patientRoutes.post("/signin",signin)
patientRoutes.post("/validateotp",otpValidator)
patientRoutes.get("/getpatient/:patientNumber",getPatient)
patientRoutes.put("/update",updatePatient)

export default patientRoutes