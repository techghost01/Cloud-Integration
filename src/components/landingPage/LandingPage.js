import React, { useState } from "react";
import Content from "../content/Content";
import Map from "../map/Map";
import Toolbar from "../Toolbar/Toolbar";
// import Navbar from '../nav/Navbar';
import "./landingPage.css";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";

const LandingPage = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  // const [location, setLocation] = useState({
    
  // })

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  return (
    <div style={{ height: "100%" }}>
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen}/>
      {sideDrawerOpen ? <Backdrop click={backdropClickHandler} /> : null}
      <main className="landingpage__main">
        <Content />
        <Map />
      </main>
    </div>
  );
};

export default LandingPage;
