import React, { Component } from "react";
import { Link } from "react-router-dom";
import request from "superagent";
import RateJoke from "./RateJoke";

const baseUrl = "http://localhost:4000";

class RateJokeContainer extends Component {
  state = { thisRating: null, avgRating: null, nrRatings: null };

  handleClick = rating => {
    const jokeId = this.props.jokeId;
    const ratingData = { rating, jokeId };
    if (!this.state.thisRating) {
      request
        .post(`${baseUrl}/ratings`)
        .send(ratingData)
        .then(res =>
          this.setState({
            thisRating: rating,
            avgRating: res.body.ratingsAvg,
            nrRatings: res.body.nrRatings
          })
        )
        .catch(error => console.error(error));
    }
  };
  reloadPage = () => {
    window.location.reload();
  };
  render() {
    return (
      <div className="background">
        <RateJoke
          handleClick={this.handleClick}
          rating={this.state.thisRating}
        />
        <div className="ratingStatsContainer">
          {this.state.avgRating && (
            <>
              <p>your rating: {this.state.thisRating}</p>
              <p>
                average rating: {this.state.avgRating.toFixed(2)} from{" "}
                {this.state.nrRatings}
              </p>
            </>
          )}
        </div>
        <div className="addLoadContainer">
          <div className="loadButton" onClick={() => this.reloadPage()}>
            Load another one?
          </div>
          <Link to={"/addjokeform"} className="addButton">
            Add another one?
          </Link>
        </div>
      </div>
    );
  }
}

export default RateJokeContainer;
