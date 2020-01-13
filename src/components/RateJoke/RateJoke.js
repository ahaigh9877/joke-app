import React from "react";
import hollowStar from "../../Black_star_hollow.svg";

const RateJoke = props => {
  return (
    <div class="starContainer">
      <div
        className="rateStar"
        id="oneStar"
        onClick={() => props.handleClick(1)}
        alt="hollow star"
      />
      <div
        className="rateStar"
        id="twoStar"
        onClick={() => props.handleClick(2)}
        alt="hollow star"
      />
      <div
        className="rateStar"
        id="threeStar"
        onClick={() => props.handleClick(3)}
        alt="hollow star"
      />
      <div
        className="rateStar"
        id="fourStar"
        onClick={() => props.handleClick(4)}
        alt="hollow star"
      />
      <div
        className="rateStar"
        id="fiveStar"
        onClick={() => props.handleClick(5)}
        alt="hollow star"
      />
    </div>
  );
};

export default RateJoke;
