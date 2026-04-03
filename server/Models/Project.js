import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "Ongoing", "Completed"],
      default: "Pending",
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);