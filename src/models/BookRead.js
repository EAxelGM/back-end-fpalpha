import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    start_date: { type: Date },
    end_date: { type: Date },
    qualification: { type: Number },
    review: { type: String },
    id_open_library: { type: String },
    info_open_library: { type: mongoose.Schema.Types.Mixed },
  },
  {
    versionKey: false,
    timestamps: true,
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

export default mongoose.model("BookRead", Schema);
