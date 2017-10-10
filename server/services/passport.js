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
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await UsersCollection.findOne({
        googleId: profile.id
      });

      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new UsersCollection({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
