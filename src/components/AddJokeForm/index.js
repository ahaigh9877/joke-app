import React, { Component } from "react";
import request from "superagent";
import AddJokeForm from "./addJokeForm";

const baseUrl = "http://localhost:4000";

class AddJokeFormContainer extends Component {
  state = { setup: "", punchline: "" };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();

    const data = this.state;
    console.log("NEW JOKE DATA: ", data);
    if (this.state.setup && this.state.punchline) {
      request
        .post(`${baseUrl}/addjoke`)
        .send(data)
        .then(res => console.log(res.body));
    } else {
      console.log("empty shite");
    }

    this.setState({
      setup: "",
      punchline: ""
    });
  };
  render() {
    return (
      <div className="background">
        <AddJokeForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

export default AddJokeFormContainer;
