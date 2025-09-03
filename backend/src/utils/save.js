
import fs from "fs"
import path from "path"

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const dataFilePath = path.join(__dirname, "../models/Languages.json");






export const readData = (filename) => {
  const dataFilePath = path.join(__dirname, "../models/",filename);
    if (!fs.existsSync(dataFilePath)) {
      fs.writeFileSync(dataFilePath, JSON.stringify([]));
    }
    const rawData = fs.readFileSync(dataFilePath);
    return JSON.parse(rawData);
  };

export const save =  (data,filename)=>{
  
  const dataFilePath = path.join(__dirname, "../models/",filename);
  const existingData = readData(filename);  
          try {
            const newEntry = data;
            existingData.push(newEntry);
            fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));
            
          } catch (err) {
            console.error('Error writing to file:', err);
            
          }
        };
