const { Schema, model } = require("mongoose");

const AlertSchema = Schema(
  {
    address: String,
    latitude: Number,
    longitude: Number,
    user: { type: Schema.Types.ObjectId, ref: "users" },
    name: String,
    lname: String,
    dni: String,
    incidence: String,
    status: { type: Number, default: '0' },
  },
  {
    timestamps: true,
  }
);

module.exports = model("alert", AlertSchema);
