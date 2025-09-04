import {save} from '../utils/save.js';
import appointments from '../models/Appointment.json' with { type: 'json' };
export const createAppointment = async (apoointment) => {
  console.log(apoointment)
    const filename = "Appointment.json";
    save(apoointment,filename)
    





} 
export const getAppointment = async (req,res) => {
    const { patientId } = req.params;
    for(let i=0;i<appointments.length;i++){
      if(appointments[i].patientId==patientId){
        return res.json(appointments[i])
      } 


    
    }





} 
export const getAppointments = async (req,res) => {
  console.log(req.params)
  const id = req.params.patientId
    console.log(id)
    

    const patientAppointments = appointments.filter(
      (appointment) => appointment.patientId  == id || appointment.patientPhone == id
    );
    console.log(patientAppointments,"All")
    if (patientAppointments.length === 0) {
      return res.status(404).json({ message: "No appointments found for this patient." });
    }
   
  
    return res.status(200).json(patientAppointments);



  }



 