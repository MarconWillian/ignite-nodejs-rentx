import multer from 'multer';
import { resolve } from 'path';

export default {
  upload(folder){
    return {
      storage: multer.diskStorage({
        
      })
    }
  }
}