import React from "react";

const Helmet = (props) => {
  document.title = props.title; // sets the title of the webapp on each page
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
