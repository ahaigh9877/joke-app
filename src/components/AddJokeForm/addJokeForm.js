import React from "react";

const addJokeForm = props => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        hello form
        <label>Joke setup</label>
        <input
          name="setup"
          type="text"
          value={props.values.name}
          onChange={props.onChange}
        ></input>
        <label>Joke punchline</label>
        <input
          name="punchline"
          type="text"
          value={props.values.name}
          onChange={props.onChange}
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default addJokeForm;
