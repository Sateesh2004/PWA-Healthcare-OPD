import express from 'express';
import doctorsRoutes from './routes/doctorsRoutes.js';
import languagesRoutes from './routes/languagesRoutes.js'
import cors from 'cors';
import patientRoutes from './routes/patientRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
// import {connectDB} from './config/db.js';

const app = express();
app.use(express.json());
app.use(cors());


app.use('/languages',languagesRoutes)
app.use('/doctors',doctorsRoutes)
app.use('/patient',patientRoutes)
app.listen(3000, () => {
  // connectDB()
  console.log('Server is running on port http://localhost:3000');
})