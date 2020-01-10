import React, { Component } from "react";
import request from "superagent";
import RandomJoke from "./RandomJoke";
import RateJokeContainer from "../RateJoke";

const baseUrl = "http://localhost:4000";

class randomJokeContainer extends Component {
  state = { setup: null, punchline: null, jokeId: null, seconds: 0 };

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState(state => ({ seconds: state.seconds + 1 })),
      1000
    );
    request(`${baseUrl}/randomjoke`)
      .then(res =>
        this.setState({
          setup: res.body.setup,
          punchline: res.body.punchline,
          jokeId: res.body.id
        })
      )
      .catch(console.error);
  }
  render() {
    return (
      <div>
        {this.state.setup && this.state.seconds < 3 && (
          <RandomJoke line={this.state.setup} />
        )}
        {this.state.punchline && this.state.seconds >= 3 && (
          <>
            <RandomJoke line={this.state.punchline} />
            <div>
              {this.state.seconds > 5 && (
                <div>
                  <p>did you like this joke...?</p>
                  <RateJokeContainer jokeId={this.state.jokeId} />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default randomJokeContainer;
