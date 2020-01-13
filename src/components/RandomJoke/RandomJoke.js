import React from "react";

const RandomJoke = props => {
  return (
    <div className="jokeContainer">
      <h1>{props.line}</h1>
    </div>
  );
};

export default RandomJoke;
