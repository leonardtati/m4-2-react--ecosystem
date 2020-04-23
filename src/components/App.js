import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import HomePage from "./HomePage";
import About from "./About";
import ItemDetails from "./ItemDetails";
import Sellers from "./Sellers";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/items/:itemId">
            <ItemDetails />
          </Route>
          <Route path="/sellers">
            <Sellers />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
