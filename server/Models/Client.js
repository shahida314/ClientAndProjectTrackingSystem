import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: String,
    phone: String,
  },
  { timestamps: true }
);

export default mongoose.model("Client", clientSchema);