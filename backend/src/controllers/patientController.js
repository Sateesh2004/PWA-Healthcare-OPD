import Patients from "../models/patientRegistration.json" with { type: "json" };
import OTP from "../models/Otp.json" with { type: "json" };
import Doctors from "../data/Doctors.json" with { type: "json" };
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import {save} from '../utils/save.js';
import {createAppointment} from './appointmentController.js';
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const register = async (req, res) => {
    
    const length = Object.keys(req.body).length;
    if(length===4){
      console.log(req.body)
    const patientId = req.body.patientId
    const doctorid = req.body.doctorid
    const time = req.body.time
    const date = req.body.date
    console.log("GL")
      const uuid = uuidv4();
      for(let i=0;i<Patients.length;i++){
        if(Patients[i].patientPhone==patientId || Patients[i].patientId==patientId){
          console.log(Patients[i])
          const{patientName,patientPhone,gender,dob,address} = Patients[i]
          console.log(patientName,patientPhone,gender,dob,address)
          for(const categories of Doctors){
            for(let i=0;i<categories.doctors.length;i++){
              if(categories.doctors[i].id==doctorid){
                var doctorInfo = categories.doctors[i]
                console.log("doctorInfo",doctorInfo)
                
            }
           
          }
        }
          createAppointment({patientName: patientName,patientPhone: patientPhone,patientId, doctorid:doctorid,doctorname:doctorInfo.name,doctorcategory:doctorInfo.category,time:time,date:date,paymentstatus:"Unpaid",appid:uuid,status:"pending",created_at:new Date().toISOString()})
         return res.send({ message: 'Created',patientPhone:patientPhone });
          
        
      }
      
    }
    return res.status(401).send({message:"Patient not found"})
  }
    else{
    
    for(let i=0;i<Patients.length;i++){
      if(Patients[i].patientPhone==req.body.patientPhone){
        return res.status(401).send({message:"Patient already exists"})
      }
    }
    const { patientName, patientPhone, gender, dob, address,doctorid,time,date } = req.body;
       console.log(Patients.length)
       const uuid = uuidv4();
       const patientId= Patients.length+1
       const filename = "patientRegistration.json";
       for(const categories of Doctors){
        for(let i=0;i<categories.doctors.length;i++){
          if(categories.doctors[i].id==doctorid){
            var doctorInfo = categories.doctors[i]
            console.log("doctorInfo",doctorInfo)
            
        }
      
       
          
         
          
          
    
       
        
      }
    }


       createAppointment({patientName: patientName,patientPhone: patientPhone,patientId, doctorid:doctorid,doctorname:doctorInfo.name,doctorcategory:doctorInfo.category,time:time,date:date,paymentstatus:"Unpaid",appid:uuid,status:"pending",created_at:new Date().toISOString()})
       save({id:uuid,patientName: patientName,patientId, patientPhone: patientPhone, gender: gender, dob: dob, address: address},filename,req,res)
       res.json({ message: 'Data saved successfully' });}

    
};





export const signin = async (req, res) => {
    const { patientId } = req.body;
    console.log(patientId)
    for(let i=0;i<Patients.length;i++){
      if(Patients[i].patientPhone==patientId || Patients[i].patientId==patientId){
        const otp = 2222
        const filename = "Otp.json";
        const otpData = {otp,patientId}
        save(otpData,filename) 
        return res.send({message:"success",otp:otp})
        
      
    }
  }
  return res.status(401).send({message:"failed"})
};



export const otpValidator=(req,res)=>{
     const { otp,patientId } = req.body;
     for(let i=0;i<OTP.length;i++){
      if(OTP[i].otp==otp && OTP[i].patientId==patientId){
        return res.send({message:"success"})
      }}
      return res.status(401).send({message:"Wrong OTP"})



}



export const getPatient  = async (req, res) => {
    
    const { patientNumber } = req.params;
    console.log(patientNumber)
    for(let i=0;i<Patients.length;i++){
      if(Patients[i].patientPhone==patientNumber){
        return res.json(Patients[i])
    
      }}
    
};
  


export const updatePatient = async (req, res) => {
  const filePath = path.resolve(__dirname, "../models/",'patientRegistration.json');
  // const loadPatients = () => {
  //   const data = fs.readFileSync(filePath, 'utf-8');
  //   return JSON.parse(data);
  // };
  const {patientName, patientPhone, gender, dob, address,patientId } = req.body;

  for(let i=0;i<Patients.length;i++){
    if(Patients[i].patientId==patientId){
      Patients[i].patientName=patientName
      Patients[i].patientPhone=patientPhone
      Patients[i].gender=gender
      Patients[i].dob=dob
      Patients[i].address=address
      fs.writeFileSync(filePath, JSON.stringify(Patients, null, 2));
      return res.send({message:"success"})
      
    }
  }
  return res.status(401).send({message:"failed"})

  
 
}