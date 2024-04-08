import { Schema, model } from "mongoose";

const flightSchema = new Schema(
  {
    seat: {
      type: String,
      unique: true,
      required: true,
    },
    origin: String,
    destiny: String,
    date: String,
    time: String,
    cost: Number,
    status: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Flights", flightSchema);
