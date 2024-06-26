import express from "express";
//import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import userRoutes from "./routes/user.js";
//import chatsRoutes from "./routes/chats.js";

const app = express();
dotenv.config();


app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/user',userRoutes);
//app.use('/chats',chatsRoutes);

app.get("/", (req, res) => {
  res.send("Hello To Vet+ API");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
  .then(()=>{console.log('...')})
  .then(() =>app.listen(PORT, () => console.log(`server running on port : ${PORT}`)))
  .catch((error) => console.log(error.message));
