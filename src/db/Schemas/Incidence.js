const { Schema, model } = require("mongoose");

const IncidenceSchema = Schema(
  {
    name: String,
    description: String
  },
  {
    timestamps: true,
  }
);

module.exports = model("incidence", IncidenceSchema);
