import React, { Component } from "react";
import request from "superagent";
import RandomJoke from "./RandomJoke";

const baseUrl = "http://localhost:4000";

class randomJokeContainer extends Component {
  state = { joke: null };

  componentDidMount() {
    request(`${baseUrl}/randomjoke`)
      .then(data => this.setState({ joke: data.body }))
      .catch(console.error);
  }
  render() {
    return (
      <div>{this.state.joke && <RandomJoke joke={this.state.joke} />}</div>
    );
  }
}

export default randomJokeContainer;
