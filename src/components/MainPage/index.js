import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainPage extends Component {
  render() {
    return (
      <div>
        <Link to={"/randomjoke"}>
          <div className="randomJokeLink">
            <p className="randomJokeLinkText">
              Click for a<br />
              random joke!
            </p>
          </div>
        </Link>
      </div>
    );
  }
}

export default MainPage;
