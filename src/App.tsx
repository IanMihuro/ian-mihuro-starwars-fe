import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Homepage } from "./pages/homepage";
import { Header } from "./components/header";
import { Search } from "./pages/search";
import { Details } from "./pages/details";

function App() {
  return (
    <div style={{ height: "100%" }}>
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
    </div>
  );
}

export default App;
