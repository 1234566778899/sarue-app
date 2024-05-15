const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(
    "mongodb+srv://ksanchezc2004:iJ6t89uRjGMAN3Qr@cluster0.xnnhm4s.mongodb.net/saruedb",
    //"mongodb://localhost:27017/saruedb",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((db) => console.log("db connected"))
  .catch((error) => console.log(error));
