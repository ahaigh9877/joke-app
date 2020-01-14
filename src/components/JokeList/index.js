import React, { Component } from "react";
import { Link } from "react-router-dom";
import request from "superagent";
import LineTo from "react-lineto";
import JokeBox from "./JokeBox";

const baseUrl = "http://localhost:4000";

class JokeListContainer extends Component {
  state = { jokes: null };
  componentDidMount() {
    request(`${baseUrl}/alljokes`).then(res =>
      this.setState({ jokes: res.body })
    );
  }

  render() {
    return (
      <div>
        <Link className="backLink" to={"/"}>
          back to
          <br />
          main page
        </Link>
        {this.state.jokes &&
          this.state.jokes.map((joke, index) => (
            <JokeBox
              className="JB"
              setup={joke.setup}
              punchline={joke.punchline}
            />
          ))}
        <LineTo
          className="linkLine"
          from="backLink"
          to="JB"
          borderWidth={8}
          borderColor="black"
          delay={true}
          zIndex={0}
        />
      </div>
    );
  }
}

export default JokeListContainer;
