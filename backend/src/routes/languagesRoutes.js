import { Router } from "express";
import { getLanguages,postLanguage} from "../controllers/languagesController.js";
const languagesRoutes = Router();
languagesRoutes.get("/",getLanguages)
languagesRoutes.post("/",postLanguage)
export default languagesRoutes