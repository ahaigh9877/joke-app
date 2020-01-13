import React from "react";
import { Link } from "react-router-dom";
import LineTo from "react-lineto";

const addJokeForm = props => {
  return (
    <div>
      <Link className="backLink" to={"/"}>
        back to
        <br />
        main page
      </Link>
      <div className="addJokeFormContainer">
        <form onSubmit={props.onSubmit}>
          <label>Joke setup</label>
          <br />

          <input
            name="setup"
            type="text"
            value={props.values.name}
            onChange={props.onChange}
            autoComplete="off"
          ></input>
          <br />
          <br />
          <label>Joke punchline</label>
          <br />

          <input
            name="punchline"
            type="text"
            value={props.values.name}
            onChange={props.onChange}
            autoComplete="off"
          ></input>
          <br />
          <br />
          <button type="submit">submit</button>
          <br />
        </form>
      </div>
      <LineTo
        className="linkLine"
        from="backLink"
        to="addJokeFormContainer"
        borderWidth={8}
        borderColor="black"
        delay={true}
        zIndex={-1}
      />
    </div>
  );
};

export default addJokeForm;
