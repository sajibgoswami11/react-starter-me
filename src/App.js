import React from "react";
import "./App.css";
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import  Home  from "./Home/Home";
import Header from "./Header/Header";
import Checkout from "./Checkout/Checkout";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Router path="/login">
            <h1>Login</h1>
          </Router>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
