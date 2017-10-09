const express = require("express"),
  mongoose = require("mongoose"),
  cookieSession = require("cookie-session"),
  passport = require("passport"),
  keys = require("./config/keys");
  
require("./models/user");
require("./services/passport");

/* CONNECT TO MONGODB */
mongoose.connect(keys.mongoURI);

const app = express();

/* USE COOKIES */
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

/* INIT PASSPORT FLOW */
app.use(passport.initialize());
app.use(passport.session());

require("./routes/auth")(app);

let port_number = app.listen(process.env.PORT || 5000);
app.listen(port_number);