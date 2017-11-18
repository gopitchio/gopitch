const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireSignin = require("../middlewares/requireSignin");

module.exports = app => {
    app.post("/api/stripe", requireSignin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: 'Charge for jacob.white@example.com',
            source: req.body.id
        });

        req.user.credits += 5;
        const user = await req.user.save();

        res.send(user);
    });
};