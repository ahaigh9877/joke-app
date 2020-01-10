import React, { Component } from "react";
import request from "superagent";
import RateJoke from "./RateJoke";

const baseUrl = "http://localhost:4000";

class RateJokeContainer extends Component {
  state = { thisRating: null, avgRating: null };

  handleClick = rating => {
    const jokeId = this.props.jokeId;
    const ratingData = { rating, jokeId };
    request
      .post(`${baseUrl}/ratings`)
      .send(ratingData)
      //   .then(res => console.log("ress ", res.body))
      .then(res =>
        this.setState({ thisRating: rating, avgRating: res.body.ratingsAvg })
      )
      .catch(error => console.error(error));
  };
  render() {
    return (
      <div>
        <RateJoke handleClick={this.handleClick} />
        {this.state.avgRating && (
          <div>
            <p>your rating: {this.state.thisRating}</p>
            <p>average rating: {this.state.avgRating.toFixed(2)}</p>
          </div>
        )}
      </div>
    );
  }
}

export default RateJokeContainer;
