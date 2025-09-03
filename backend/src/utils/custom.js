
import fs from "fs"

import path from "path"

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const dataFilePath = path.join(__dirname, "../models/patientRegistration.json");


export const readData = () => {
    if (!fs.existsSync(dataFilePath)) {
      fs.writeFileSync(dataFilePath, JSON.stringify([]));
    }
    const rawData = fs.readFileSync(dataFilePath);
    return JSON.parse(rawData);
  };
export  const writeData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  };