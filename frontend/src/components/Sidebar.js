import React from "react";
import img from "../images/img.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="sidebar_img">
        <img src={img} />
      </div>
      <div className="sidebar_details">
        <p>Name: A B M Shawon Islam</p>
        <p>Designation: MERN Stack Developer</p>
        <p>Office Time: 11am - 8pm</p>
        <p>Offday: Sunday</p>
      </div>
      <div className="sidebar_link">
        <Link to="/">Emplyee List</Link>
        <Link to="/todayclass">Today Class</Link>
        <Link to="/postactivity">Post Activity</Link>
        <Link to="/activitylist">Activity List</Link>
      </div>
    </div>
  );
};

export default Sidebar;
