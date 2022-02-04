import express from "express";
import dotenv from "dotenv";

const app = express();
const router = express.Router();
dotenv.config();

router.get("/", (req, res) => {
  res.send("Hello this is homepage");
});

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
