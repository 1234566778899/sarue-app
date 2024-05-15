const { Schema, model } = require("mongoose");

const SuggestionSchema = Schema(
  {
    description: String,
    usuario: { type: Schema.Types.ObjectId, ref: "users" },
    status: String,
    category: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("suggestion", SuggestionSchema);
