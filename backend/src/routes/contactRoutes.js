import express from "express";
import * as ContactController from "../controllers/contact.controller.js";
import { verifyToken } from "../middlewares/authentication.middleware.js";
import { validator } from "../middlewares/validator.middleware.js";
import {
  contactSchema,
  updateContactSchema,
} from "../validators/contactSchema.js";
import {
  getUploadedPhotoUrl,
  singleUploadCtrl,
} from "../middlewares/photoUpload.middleware.js";

const router = express.Router();

router.post(
  "/",
  verifyToken,
  singleUploadCtrl,
  getUploadedPhotoUrl,
  validator(contactSchema),
  ContactController.addContact
);

router.get("/", verifyToken, ContactController.getAllContacts);

router.delete("/:id", verifyToken, ContactController.deleteContactById);

router.put(
  "/:id",
  verifyToken,
  validator(updateContactSchema),
  ContactController.updateContactById
);

// router.post("/upload", singleUploadCtrl, async (req, res) => {
//   try {
//     if (!req.file) {
//       throw new Error("Image is not presented!");
//     }
//     console.log(req.body);
//     const file64 = bufferToBase64(req.file);
//     const uploadResult = await uploadCloud(file64.content);
//     console.log(uploadResult.secure_url);

//     return res.json({ message: "Hurraaay" });
//   } catch (e) {
//     return res.status(422).send({ message: e.message });
//   }
// });

export default router;
