import pkg from 'pg';
const {Client} = pkg;
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
export const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });
export const connectDB = async ()=>{
    
    try {
       await client.connect();
        console.log('Connected');
      } catch (err) {
        console.error('Error connecting to PostgreSQL:', err.message);
        throw err;
      }
}

