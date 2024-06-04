const { Schema, model } = require("mongoose");

const SuggestionSchema = Schema(
  {
    description: String,
    usuario: { type: Schema.Types.ObjectId, ref: "users" },
    status: Number,
    category: String,
    name: String,
    lname: String,
    dni: String
  },
  {
    timestamps: true,
  }
);

module.exports = model("suggestion", SuggestionSchema);
