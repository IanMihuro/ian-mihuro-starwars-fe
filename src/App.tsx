import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styled from "styled-components";

import { Homepage } from "./pages/homepage";
import { Header } from "./components/header";
import { Search } from "./pages/search";
import { Details } from "./pages/details";

const Container = styled.div`
  margin: 80px 0px;
`;

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Header />
        <Container>
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
        </Container>
      </Router>
    </div>
  );
}

export default App;
