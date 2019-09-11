import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const STRIPE_PUBLISHABLE_KEY = "pk_test_xhdQo7Yxcg3KkoOjw10dSdjy00qxcj4tso";

const onToken = (amount, description) => token => {
  debugger
  const headers = {
    'Content-Type': 'application/json'
  }
  axios.post('https://e2df3173.ngrok.io/api/payments', { description, token: token, amount: amount }, { headers: headers })
    .then(response => {
      console.log('response: ', response);
      alert("payment success", response);
    })
    .catch(err => {
      console.log('error: ', err);
      alert("payment failure", err);
    })
}

const Checkout = ({ name, amount, description }) =>
  <StripeCheckout
    className="App-link"
    label="Purchase via card"
    name={name}
    description={description}
    amount={amount}
    token={onToken(amount, description)}
    stripeKey={STRIPE_PUBLISHABLE_KEY}
  />

export default Checkout;
