import express from "express";
import bcrypt from "bcryptjs";
import TimingModel from '../models/timingModel.js'
const TimingRouter = express.Router();

TimingRouter.get("/auth", async (req, res) => {
  res.send({ message: "Welcome Bro" });
});

TimingRouter.post("/addtime", async (req, res) => {
  const Timing = new TimingModel({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  console.log(Timing);
  const createdTiming = await Timing.save();
  res.send({ message: "successfully added" });
  
});


export default TimingRouter;
