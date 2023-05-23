import React from "react";
import "./content.css";

const Content = (props) => {
  return (
    <main className="main--content">
      <div className="main--content-divtext">
        <p className="p--text">Easily find me at this location.</p>
        <button className="btn">Show location</button>
      </div>
    </main>
  );
};

export default Content;
