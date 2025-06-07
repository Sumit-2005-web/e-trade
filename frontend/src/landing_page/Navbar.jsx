import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md border-bottom sticky-top" style={{ backgroundColor: "#FFF" }}>
      <div className="container">
        {/* Brand / Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="images/E-Trade-Logo.png"
            alt="E-Trade Logo"
            className="img-fluid"
            style={{ height: "40px" }}
          />
        </Link>

        {/* Toggle button visible only on md and smaller */}
        <button
          className="navbar-toggler d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-start text-start gap-3">
            <li className="nav-item">
              <Link className="nav-link active" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/product">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support">Support</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link active" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
