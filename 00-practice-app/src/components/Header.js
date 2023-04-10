import React from "react";
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  return (
<nav className="pb-4 navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="fs-1 navbar-brand" to="/about">Kevin Hernandez</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="fs-3 collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="ms-auto navbar-nav">
        <Link className="nav-link" to="/about">About Me</Link><i className="fa-solid fa-head-side"></i>
        <Link className="nav-link" to="/portfolio">Portfolio</Link>
        <Link className="nav-link" to="/resume">Resume</Link>
        <Link className="nav-link" to="/contact">Contact Me</Link>
      </div>
    </div>
  </div>
</nav>
  );
}

export default NavTabs;
