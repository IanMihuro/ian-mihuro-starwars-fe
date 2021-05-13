import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Homepage } from "./pages/homepage";
import { Header } from "./components/header";
import { Search } from "./pages/search";
import { Details } from "./pages/details";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
