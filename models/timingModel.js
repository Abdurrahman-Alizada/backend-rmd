import mongoose from "mongoose";

const TimingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Timing = mongoose.model("Timing", TimingSchema);
export default Timing;
