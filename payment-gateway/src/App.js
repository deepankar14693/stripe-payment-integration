import React from 'react';
import logo from './logo.svg';
import './App.css';
import Checkout from './Stripe/StripeButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./assets/tesla.jpg')} className="App-logo" alt="logo" />
       <Checkout 
          name={'Tesla ES-93'}
          amount={99999}
          description={'electrically driven by power'}
       />
      </header>
    </div>
  );
}

export default App;
