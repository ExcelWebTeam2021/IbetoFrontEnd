import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

function Navbar2() {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a
                class="nav-link"
                href="#About"
                style={{ textDecoration: "none" }}
              >
                About
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#Fellowship"
                style={{ textDecoration: "none" }}
              >
                Fellowship
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ textDecoration: "none" }}>
                Partners
              </a>
            </li>
          </ul>
        </div>

        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link to="/">
                <button type="button" class="btn btn-outline-light">
                  <span>
                    {" "}
                    <i class="fa fa-arrow-circle-left"></i>
                  </span>
                  <a
                    href="https://ibeto.excelmec.org/"
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    Go back
                  </a>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar2;
