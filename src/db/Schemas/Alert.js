const { Schema, model } = require("mongoose");

const AlertSchema = Schema(
  {
    address: String,
    latitude: Number,
    longitude: Number,
    user: { type: Schema.Types.ObjectId, ref: "users" },
    name: String,
    laname: String,
    dni: String,
    incidence: String,
    status: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("incidence", AlertSchema);
