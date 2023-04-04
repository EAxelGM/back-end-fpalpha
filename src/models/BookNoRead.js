import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
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

export default mongoose.model("BookNoRead", Schema);
