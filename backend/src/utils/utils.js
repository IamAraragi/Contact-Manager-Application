import path from "path";
import DatauriParser from "datauri/parser.js";
import cloudinary from "cloudinary";

const parser = new DatauriParser();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Function to convert image buffer to base64
 * @param {*} file
 * @returns
 */
export const bufferToBase64 = (file) => {
  return parser.format(path.extname(file.originalname).toString(), file.buffer);
};

/**
 * Function to upload file to cloudinary
 * @param {*} file
 * @returns
 */
export const uploadCloud = (file) => {
  return cloudinary.v2.uploader.upload(file);
};
