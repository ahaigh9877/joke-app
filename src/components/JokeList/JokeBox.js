import React, { Component } from "react";

class JokeBox extends Component {
  state = { content: this.props.setup };

  toggleContent = () => {
    if (this.state.content === this.props.setup) {
      this.setState({ content: this.props.punchline });
    } else {
      this.setState({ content: this.props.setup });
    }
  };
  render() {
    return (
      <div className="JokeBox" onClick={() => this.toggleContent()}>
        {this.state.content}
      </div>
    );
  }
}

export default JokeBox;
