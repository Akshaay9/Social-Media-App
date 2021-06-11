import React from "react";
import "./LandingPage.css";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
function LandingPage() {
  const location = useLocation();
  return (
    <>
      {location.pathname.includes("login") && <Login />}
      {location.pathname.includes("signup") && <SignUp />}

      <div className="landing-bg ">
        <div className="landing-bg-logo ">
          <h2>
            <span style={{ color: "#2d88ff" }}>Fit.</span>Sharkk
          </h2>
        </div>

        <div className="landing-bg-container ">
          <div className="landing-bg-subtitle ">
            <span></span>
            <h4> Akshay</h4>
          </div>
          <div className="landing-bg-maintitle">
            <h1>
              Social media platform to Share your fitness journey with the{" "}
              <span style={{ color: "#2d88ff" }}>World.</span>
            </h1>
          </div>

          <div className="landing-bg-points">
            <ul>
              <li>Connect with like minded people</li>
              <li>Share your progress everyday</li>
              <li>Help other achieve their Fitness goal </li>
              <li>Grow together as a family </li>
            </ul>
          </div>

          <Link to="/landing/signup">
            {" "}
            <button className="landing-bg-signup">Sign Up</button>
          </Link>
          <Link to="/landing/login">
            {" "}
            <button className="landing-bg-login">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
