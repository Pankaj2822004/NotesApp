import React, { useEffect , useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate  } from "react-router-dom";

import "./nav.css";
const Navbar = (props) => {
  let location = useLocation();
  let navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
 
  useEffect(() => {
    // Update active link and button based on current location
    setActiveLink(location.pathname);
    if (location.pathname === "/login") {
      setActiveButton("login");
    } else if (location.pathname === "/signup") {
      setActiveButton("signup");
    } else {
      setActiveLink(null);
      setActiveButton(null);
    }
  }, [location]);
  const handleColorChange = (linkName) => {
    setActiveLink(linkName);
  };

  const isActive = (linkName) => {
    return linkName === activeLink ? "greenyellow" : "yellow";
  };
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        style={{ backgroundColor: "black", color: "white"  , height: "60px"}}
      >
        <div className="container-fluid">
          <a className="navbar-brand" style={{ color: "deepskyblue" }} href="/">
            <h4>Notes</h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  // style={{ color: "white" }}
                  aria-current="page"
                  style={{ color: isActive("/") }}
                  onClick={() => handleColorChange("/")}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: isActive("/About") }}
                  onClick={() => handleColorChange("/About")}
                  // style={{ color: "white" }}
                  to="/About"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: isActive("/contact") }}
                  onClick={() => handleColorChange("/contact")}
                  // style={{ color: "white" }}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <div
                className="bg-primary rounded mx-1"
                onClick={() => {
                  props.toggleMode("primary");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
            </div>
            <div className="d-flex">
              <div
                className="bg-danger rounded mx-1"
                onClick={() => {
                  props.toggleMode("danger");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
            </div>
            <div className="d-flex">
              <div
                className="bg-success rounded mx-1"
                onClick={() => {
                  props.toggleMode("success");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
            </div>
            <div className="d-flex">
              <div
                className="bg-warning rounded mx-1"
                onClick={() => {
                  props.toggleMode("warning");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
            </div>

           
            <form className="d-flex2">
           <Link
            className={`btn btn-outline-success mx-1 ${
              activeButton === "login" ? "active" : ""
            }`}
            style={{
              backgroundColor: activeButton === "login" ? "rgb(121, 224, 156)" : "rgb(204, 150, 183)",
              border: `2px solid ${activeButton === "login" ? "blue" : "white"}` ,
              width: "82px",
              height: "39px" ,
              color: "black"
            }}
            to="/login"
            role="button"
           
          >
            Login
            </Link>
            <Link
            className={`btn btn-outline-success ${
              activeButton === "signup" ? "active" : ""
            }`}
            style={{
              backgroundColor: activeButton === "signup" ? "rgb(121, 224, 156)" : "rgb(204, 150, 183)",
              width: "81px",
              height: "38px",
              border: `2px solid ${activeButton === "signup" ? "blue" : "white"}` 
              ,  fontSize: "17px",
              color: "black" ,
              margin: "1px 6px",
              padding: "3px 3px"
            }}
            to="/signup"
            role="button"
        
          >
              signup
            </Link> 
         </form>
            
             
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
