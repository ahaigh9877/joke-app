import React from "react";

const RateJoke = props => {
  const { rating } = props;
  return (
    <div className="starContainer">
      {rating >= 5 ? (
        <div className="ratedStar" />
      ) : (
        <div className="rateStar" onClick={() => props.handleClick(5)} />
      )}
      {rating >= 4 ? (
        <div className="ratedStar" />
      ) : (
        <div className="rateStar" onClick={() => props.handleClick(4)} />
      )}
      {rating >= 3 ? (
        <div className="ratedStar" />
      ) : (
        <div className="rateStar" onClick={() => props.handleClick(3)} />
      )}
      {rating >= 2 ? (
        <div className="ratedStar" />
      ) : (
        <div className="rateStar" onClick={() => props.handleClick(2)} />
      )}
      {rating >= 1 ? (
        <div className="ratedStar" />
      ) : (
        <div className="rateStar" onClick={() => props.handleClick(1)} />
      )}
    </div>
  );
};

export default RateJoke;
