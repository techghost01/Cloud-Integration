import React from "react";
import "./SideDrawer.css";

const sideDrawer = (props) => {
  let drawerClass = " side-drawer";
  if (props.show) {
    drawerClass = "side-drawer open"
  }

  return (
    <nav className={drawerClass} >
      <ul>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Contact us</a>
        </li>
        <li>
          <a href="/">API</a>
        </li>
        <li>
          <a href="/">Premium</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
