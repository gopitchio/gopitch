const passport = require("passport"),
  GoogleStrategy = require("passport-google-oauth20").Strategy,
  keys = require("../config/keys"),
  mongoose = require("mongoose");

const UsersCollection = mongoose.model("users");
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
   UsersCollection.findById(id)
   .then(user => done(null, user))
   .catch(error => done(error));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      UsersCollection.findOne({ googleId: profile.id })
        .then(existingUser => {
          if (existingUser) {
            done(null, existingUser);
          } else {
            const user = new UsersCollection({
              googleId: profile.id
            });

            user.save().then(user => done(null, user));
          }
        })
        .catch(error => done(error));
    }
  )
);
