import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3001/api/graphql",
  cache: new InMemoryCache({ addTypename: false }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <HomePage />
  </ApolloProvider>
);
