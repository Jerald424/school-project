import { faBuilding } from "@fortawesome/free-regular-svg-icons";

import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { main } from "../ContextApi";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { confirmAlert } from "react-confirm-alert";

export default function Navbar() {
  const location = useLocation();
  console.log(location.pathname);
  const auth = useContext(main);
  const logOut = () => {
    confirmAlert({
      title: <h3>Confirmation Alert</h3>,
      message: <p>Are you sure to logout</p>,
      buttons: [
        { label: "No" },
        {
          label: "Yes",
          onClick: () => {
            auth.isUserLogOut();
          },
        },
      ],
    });
  };
  return (
    <div>
      <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <div class='container-fluid'>
          <Link
            class={`navbar-brand ${
              location.pathname === "/" && "text-warning fw-bold"
            }`}
            to='/'>
            School <FontAwesomeIcon icon={faBuilding} />
          </Link>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div class='navbar-nav'>
              {!auth.userLogIn && (
                <Link
                  class={`nav-link active ${
                    location.pathname === "/login" && "text-warning fw-bold"
                  }`}
                  to='/login'>
                  login
                </Link>
              )}

              <Link
                to='/dataencrypt'
                className={`nav-link ${
                  location.pathname === "/dataencrypt" && "text-warning fw-bold"
                }`}>
                Data Encrypt
              </Link>
              <Link
                to='/encryptdatadisplay'
                className={`nav-link ${
                  location.pathname === "/encryptdatadisplay" &&
                  "text-warning fw-bold"
                }`}>
                Display data
              </Link>
              <Link
                to='/datatabledisplay'
                className={`nav-link ${
                  location.pathname === "/datatabledisplay" &&
                  "text-warning fw-bold"
                }`}>
                Table Handle
              </Link>
              <Link
                to='/studentdata'
                className={`nav-link ${
                  location.pathname === "/gowthamdata" && "text-primary"
                }`}>
                Table Data
              </Link>
              {auth.userLogIn && (
                <button
                  class='nav-link '
                  style={{
                    background: "none",
                    border: "none",
                    width: "100px",
                    color: "red",
                    textAlign: "left",
                  }}
                  onClick={logOut}>
                  LogOut <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
