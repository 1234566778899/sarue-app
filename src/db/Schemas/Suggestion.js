const { Schema, model } = require("mongoose");

const SuggestionSchema = Schema(
  {
    description: String,
    user: { type: Schema.Types.ObjectId, ref: "users" },
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
