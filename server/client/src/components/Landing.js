import React from "react";

const Landing = () => {
  var heightStyle = {
    height: "400px",
    height: "100%",
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "center"
  };
  return (
    <div className="nav-header valign-wrapper" style={heightStyle}>
      <h1>Pitch</h1>
      <div>An Idea You Like</div>
    </div>
  );
};

export default Landing;
