import React, { Component } from "react";
import { Link } from "react-router-dom";
import LineTo from "react-lineto";

class MainPage extends Component {
  render() {
    return (
      <div className="background">
        <div className="mainCirclesContainer">
          <Link className="randomJokeLink" to={"/randomjoke"}>
            <p className="randomJokeLinkText">
              Click for a<br />
              random joke!
            </p>
          </Link>
          <LineTo
            className="linkLine"
            from="randomJokeLink"
            to="addJokeLink"
            borderWidth={8}
            borderColor="black"
            delay={true}
            zIndex={0}
          />
          <Link className="addJokeLink" to={"/addjokeform"}>
            add a joke
          </Link>
          <LineTo
            className="linkLine"
            from="randomJokeLink"
            to="jokeListLink"
            borderWidth={8}
            borderColor="black"
            delay={true}
            zIndex={0}
          />
          <Link className="jokeListLink" to={"/jokelist"}>
            see a list
            <br />
            of jokes
          </Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
