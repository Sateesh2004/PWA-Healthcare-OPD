
import languages from '../data/Languages.json' with { type: 'json' };

import {save} from '../utils/save.js';


export const getLanguages = async (req, res) => {
   
    try {
        
        return res.json(languages); 
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something went wrong' });     }
    
  };
export const postLanguage = async (req, res) => {
    const { language } = req.body;
    
       const filename = "Languages.json";
       save(language,filename)
       res.json({ message: 'Data saved successfully' });

      } 
      
   
   

  