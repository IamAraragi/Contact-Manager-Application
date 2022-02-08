import multer from "multer";
import { bufferToBase64, uploadCloud } from "../utils/utils.js";
import { StatusCodes } from "http-status-codes";

const ALLOWED_FORMATS = ["image/jpeg", "image/png", "image/jpg"];

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    if (ALLOWED_FORMATS.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Not supported file type!"), false);
    }
  },
});

const singleUpload = upload.single("image");
export const singleUploadCtrl = (req, res, next) => {
  singleUpload(req, res, (error) => {
    if (error) {
      console.log(error);
      return res.status(422).send({ message: "Image upload fail!" });
    }

    next();
  });
};

export const getUploadedPhotoUrl = async (req, res, next) => {
  try {
    const file64 = bufferToBase64(req.file);
    const uploadResult = await uploadCloud(file64.content);
    req.body.photo = uploadResult.secure_url;
    next();
  } catch (err) {
    next({
      statusCode: StatusCodes.BAD_REQUEST,
      message: "Image couldnot be uploaded",
    });
  }
};
