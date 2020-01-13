import React from "react";
import hollowStar from "../../Black_star_hollow.svg";

const RateJoke = props => {
  return (
    <div class="starContainer">
      <img
        className="rateStar"
        id="oneStar"
        onClick={() => props.handleClick(1)}
        src={hollowStar}
        alt="hollow star"
      />
      <img
        className="rateStar"
        id="twoStar"
        onClick={() => props.handleClick(2)}
        src={hollowStar}
        alt="hollow star"
      />
      <img
        className="rateStar"
        id="threeStar"
        onClick={() => props.handleClick(3)}
        src={hollowStar}
        alt="hollow star"
      />
      <img
        className="rateStar"
        id="fourStar"
        onClick={() => props.handleClick(4)}
        src={hollowStar}
        alt="hollow star"
      />
      <img
        className="rateStar"
        id="fiveStar"
        onClick={() => props.handleClick(5)}
        src={hollowStar}
        alt="hollow star"
      />
    </div>
  );
};

export default RateJoke;
