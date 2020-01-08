import React from "react";

const RandomJoke = props => {
  return (
    <div>
      <h1>{props.joke.setup}</h1>
      <h2>{props.joke.punchline}</h2>
    </div>
  );
};

export default RandomJoke;
