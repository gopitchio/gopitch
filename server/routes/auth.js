const passport = require("passport");

module.exports = app => {
  /* GOOGLE OAUTH */
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/competitions");
    }
  );

  app.get("/api/current_user", (req, res) => {
    res.send(req.user); // user property is attached by passport
  });

  app.get("/api/logout", (req, res) => {
    req.logout(); // logout function is attached by passport
    res.redirect("/");
  });
};
