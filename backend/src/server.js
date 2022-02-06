import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoutes.js";
import contactRoute from "./routes/contactRoutes.js";
import {
  errorHandler,
  notFoundErrorHandler,
} from "./middlewares/error.middleware.js";

const app = express();
const router = express.Router();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.use("/user", userRoute);
router.use("/contacts", contactRoute);
app.use("/api", router);

app.use(notFoundErrorHandler, errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
