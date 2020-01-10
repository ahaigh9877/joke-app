import React from "react";
import hollowStar from "../../Orange_star_hollow.svg";

const RateJoke = props => {
  return (
    <div>
      <img
        id="oneStar"
        onClick={() => props.handleClick(1)}
        src={hollowStar}
        alt="hollow star"
      />
      <img
        id="twoStar"
        onClick={() => props.handleClick(2)}
        src={hollowStar}
        alt="hollow star"
      />
      <img
        id="threeStar"
        onClick={() => props.handleClick(3)}
        src={hollowStar}
        alt="hollow star"
      />
      <img
        id="fourStar"
        onClick={() => props.handleClick(4)}
        src={hollowStar}
        alt="hollow star"
      />
      <img
        id="fiveStar"
        onClick={() => props.handleClick(5)}
        src={hollowStar}
        alt="hollow star"
      />
    </div>
  );
};

export default RateJoke;
