import React, { Component } from "react";
import { Link } from "react-router-dom";
import request from "superagent";
import RateJoke from "./RateJoke";
import AddJokeForm from "../AddJokeForm";

const baseUrl = "http://localhost:4000";

class RateJokeContainer extends Component {
  state = { thisRating: null, avgRating: null };

  handleClick = rating => {
    const jokeId = this.props.jokeId;
    const ratingData = { rating, jokeId };
    if (!this.state.thisRating) {
      request
        .post(`${baseUrl}/ratings`)
        .send(ratingData)
        .then(res =>
          this.setState({ thisRating: rating, avgRating: res.body.ratingsAvg })
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
        <RateJoke handleClick={this.handleClick} />
        {this.state.avgRating && (
          <div>
            <p>your rating: {this.state.thisRating}</p>
            <p>average rating: {this.state.avgRating.toFixed(2)}</p>
            <div className="addLoadContainer">
              <div className="loadButton" onClick={() => this.reloadPage()}>
                Load another one?
              </div>
              <Link to={"/addjokeform"} className="addButton">
                Add another one?
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default RateJokeContainer;
