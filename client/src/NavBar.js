import React from "react";
import { NavLink} from "react-router-dom";
import "./navbar.css";
import { useState } from "react"



function NavBar() {
  
  const [active, setActive] = useState("nav_menu");
  const [icon, setIcon] = useState("nav_toggler");

  const navToggle = () => {
    if (active === "nav_menu") {
      setActive("nav_menu nav_active");
    } else setActive("nav_menu");

    // Icon Toggler
    if (icon === "nav_toggler") {
      setIcon("nav_toggler toggle");
    } else setIcon("nav_toggler");
  };

  return (
    <nav className="nav">
 
   <a href="/" className="nav_brand"> COCA COFFEE</a>
    
      <div className="nav-items">
        <ul className={active}>
          <li>
            <NavLink to="/" className="nav_link"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/coffees" className="nav_link">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/login" className="nav_link">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup" className="nav_link">Signup</NavLink>
          </li>
        </ul>
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default NavBar;
