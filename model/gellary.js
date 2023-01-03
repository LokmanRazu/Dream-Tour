const { model, Schema } = require("mongoose");
const Place = require("./places");

const gellarySchema = new Schema(
  {
    place: {
      type: Schema.ObjectId,
      ref: "Place",
    },
    image_link: {
      type: String,
    },
  },
  { timestamps: true }
);

const Gellary = model("Gellary", gellarySchema);
module.exports = Gellary;
