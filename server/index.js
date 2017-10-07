const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/passport");

/* CONNECT TO MONGODB */
mongoose.connect(keys.mongoURI);

const app = express();

require("./routes/auth")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, "localhost", () => {
  console.log("Dev server is running on port: " + PORT);
});
