import express from 'express';
import doctorsRoutes from './src/routes/doctorsRoutes.js';
import languagesRoutes from './src/routes/languagesRoutes.js'
import cors from 'cors';
import patientRoutes from './src/routes/patientRoutes.js';
import appointmentRoutes from './src/routes/appointmentRoutes.js';
import connectDB from './src/config/db.js';
import Appointment from "./src/models/Appointment.js"; // your schema file

const app = express();
app.use(express.json());
app.use(cors());



app.get('/', (req, res) => {
  res.send('Hello World');
});
app.use('/languages',languagesRoutes)
app.use('/doctors',doctorsRoutes)
app.use('/patient',patientRoutes)
app.use('/appointment',appointmentRoutes)
app.listen(3000, () => {
  connectDB()
  console.log('Server is running on port https://pwa-healthcare-opd-12.onrender.com');
})