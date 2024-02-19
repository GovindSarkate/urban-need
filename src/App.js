import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import HomePageServiceSnippets from '../src/Components/HomePageServiceSinppets';
import Footer from './Components/Footer';
import LoginandRegister from './Components/LoginandRegister';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HairCut from "./Components/HairCut";
import Pedicure from '../src/Components/Pedicure';
import AcRepair from './Components/AcRepair';
import SkinCare from './Components/SkinCare';
import Massage from './Components/Massage';
import PestControl from './Components/PestControl';
import PaymentOptions from './Components/PaymenOptions/PaymentOptions';
import CreditCardPayment from './Components/PaymenOptions/CreditCardPayment';
import UPI from './Components/PaymenOptions/UPI';
import ErrorPage from './Components/ErrorPage';

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <br />
        <Switch>
          <Route path="/login" component={LoginandRegister} />
          <Route exact path="/" component={HomePageServiceSnippets} />
          <Route path="/haircut" component={HairCut} />
          <Route path="/pedicure" component={Pedicure} />
          <Route path="/pestcontrol" component={PestControl} />
          <Route path="/skincare" component={SkinCare} />
          <Route path="/acrepair" component={AcRepair} />
          <Route path="/massage" component={Massage} />
          <Route path="/payment" component={PaymentOptions} />
          <Route exact path="/payment" component={PaymentOptions} />
          <Route path="/creditcard" component={CreditCardPayment} />
          <Route path="/upi" component={UPI} />
          <Route path="/error" component={ErrorPage} />
        </Switch>
        <br />
        <hr />
        <Footer />
      </>
    </Router>
  );
}

export default App;
