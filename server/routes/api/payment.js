const express = require('express');
const stripe = require('stripe') (process.env.STRIPE_SECRET_KEY);
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Payment gateway works',
    time: Date.now
  });
})

router.post('/', (req, res) => {
  const credentials = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
    description: req.body.description
  }
  stripe.charges.create(credentials, (err, response) => {
    if (err) {
      return res.status(400).json({ message: err })
    }
    return res.status(200).json({ message: response })
  })

})

module.exports = router;
