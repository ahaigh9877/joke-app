import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import RandomJokeContainer from "./components/RandomJoke/";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={MainPage} />
      <Route exact path="/randomjoke" component={RandomJokeContainer} />
    </div>
  );
}

export default App;
