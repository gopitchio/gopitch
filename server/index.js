const express = require("express"),
  mongoose = require("mongoose"),
  cookieSession = require("cookie-session"),
  passport = require("passport"),
  keys = require("./config/keys"),
  bodyParser = require("body-parser");
  
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

app.use(bodyParser.json());

/* INIT PASSPORT FLOW */
app.use(passport.initialize());
app.use(passport.session());

require("./routes/auth")(app);
require("./routes/stripeRoutes")(app);

if(process.env.NODE_ENV === 'production'){
  // Express will serve up production assets like main.js and main.css files
  app.use(express.static('client/build'));

  // Express will serve up the index.html file if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

let port_number = app.listen(process.env.PORT || 5000);
app.listen(port_number);