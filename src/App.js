import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import MainPage from "./components/MainPage";
import RandomJokeContainer from "./components/RandomJoke/";
import AddJokeForm from "./components/AddJokeForm";
import JokeList from "./components/JokeList";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={MainPage} />
      <Route exact path="/randomjoke" component={RandomJokeContainer} />
      <Route exact path="/addjoke" component={AddJokeForm} />
      <Route exact path="/jokelist" component={JokeList} />
    </div>
  );
}

export default App;
