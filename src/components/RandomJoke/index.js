import React, { Component } from "react";
import request from "superagent";
import RandomJoke from "./RandomJoke";

const baseUrl = "http://localhost:4000";

class randomJokeContainer extends Component {
  state = { setup: null, punchline: null, seconds: 0 };

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState(state => ({ seconds: state.seconds + 1 })),
      1000
    );
    request(`${baseUrl}/randomjoke`)
      .then(data =>
        this.setState({
          setup: data.body.setup,
          punchline: data.body.punchline
        })
      )
      .catch(console.error);
  }
  render() {
    return (
      <div>
        {this.state.setup && this.state.seconds < 2 && (
          <RandomJoke line={this.state.setup} />
        )}
        {this.state.punchline && this.state.seconds >= 2 && (
          <RandomJoke line={this.state.punchline} />
        )}
      </div>
    );
  }
}

export default randomJokeContainer;
