import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const loc = useLocation();
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          <Link to="/">Rahul Sharma</Link>
        </div>
        <nav className="menu">
          <Link className={loc.pathname === "/" ? "active" : ""} to="/">Home</Link>
          <Link className={loc.pathname === "/projects" ? "active" : ""} to="/projects">Projects</Link>
          <Link className={loc.pathname === "/gallery" ? "active" : ""} to="/gallery">Gallery</Link>
          <Link className={loc.pathname === "/contact" ? "active" : ""} to="/contact">Contact</Link> 
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
