import { v2 as cloudinary} from 'cloudinary'
import { CLOUNDARY_API_KEY, CLOUNDARY_CLOUD_NAME, CLOUNDARY_API_SECRET } from '../config.js';
// Configuration 
cloudinary.config({
  cloud_name: CLOUNDARY_CLOUD_NAME,
  api_key: CLOUNDARY_API_KEY,
  api_secret: CLOUNDARY_API_SECRET
});

// Upload
export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "contextAPI"
  })
}

//Remove
export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id)
}