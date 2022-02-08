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

export default router;
