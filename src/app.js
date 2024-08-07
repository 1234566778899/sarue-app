const express = require("express");
const app = express();
const cors = require("cors");
require("./db/index");
app.use(express.json());
const port = process.env.PORT || 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("v.1.0.2");
});

app.use("/users", require("./routes/User"));
app.use("/alerts", require("./routes/Alert"));
app.use("/incidences", require("./routes/Incidence"));
app.use("/suggestions", require("./routes/Suggestion"));
app.listen(port, () => {
  console.log("server running on port: " + port);
});
