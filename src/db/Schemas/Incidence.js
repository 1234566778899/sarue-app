const { Schema, model } = require("mongoose");

const IncidenceSchema = Schema(
  {
    address: String,
    latitude: String,
    longitude: String,
    user: String,
    incidencia: String,
    status: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("incidence", IncidenceSchema);
