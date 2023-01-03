const { model, Schema } = require("mongoose");

const PlaceSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlangth: 15,
      unique:true
    },
    thumbnail: {
      type: String,
      required: true,
    },
    description: String,
    is_visited: Boolean,
    visited_date: String,
    temperature: String,
    bus: String,
  },
  { timestamps: true }
);

const Place = model("Place", PlaceSchema);
module.exports = Place;
