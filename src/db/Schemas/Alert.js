const { Schema, model } = require("mongoose");

const AlertSchema = Schema(
  {
    address: String,
    latitude: Number,
    longitude: Number,
    user: { type: Schema.Types.ObjectId, ref: "users" },
    incidence: { type: Schema.Types.ObjectId, ref: "incidences" },
    status: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("incidence", AlertSchema);
