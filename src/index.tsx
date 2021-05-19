import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloSetUp";
import { CharacterProvider } from "./CharacterContext";
import { ErrorBoundary } from "react-error-boundary";
import { FallBackComponent } from "./components/errorMessage";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={FallBackComponent}>
      <ApolloProvider client={client}>
        <CharacterProvider>
          <App />
        </CharacterProvider>
      </ApolloProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
