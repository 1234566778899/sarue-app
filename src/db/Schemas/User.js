const { Schema, model } = require("mongoose");

const UserSchema = Schema(
  {
    dni: String,
    cellphone: String,
    type: String,
    password: String,
    name: String,
    lname: String,
    active: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = model("user", UserSchema);
