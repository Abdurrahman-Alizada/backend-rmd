import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./router/userRouter.js";
import timingRouter from "./router/timingRouter.js";

dotenv.config();

// app config
const app = express();
const port = process.env.PORT || 8000;

// db config
mongoose.connect(process.env.MONGO_URL);

// for checking that database is connected or not
mongoose.connection.once("open", () => {
  console.log("Database is connected");
});

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// api routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.use("/api/account", userRouter);
app.use("/api/timing", timingRouter)
// listen
app.listen(port, () => console.log(`Listening on local host ${port}`));
