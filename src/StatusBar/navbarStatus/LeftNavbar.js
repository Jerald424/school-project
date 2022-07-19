import {
  faClock,
  faThumbsDown,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faCircleInfo,
  faHome,
  faMoneyBill1,
  faOutdent,
  faTableCells,
  faUserCheck,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Badge } from "@mui/material";

export default function LeftNavbar() {
  const [dashboardMenu, setDashboardMenu] = useState(true);
  const [empProfile, setEmpProfile] = useState(true);
  const [likeCount, setLikeCount] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div className='total-navbar'>
      <div className='nav-logo'>
        <img src='https://miro.medium.com/max/1366/0*fGUK9MVBTekjdAGF.jpg' />
        <div className='logo-text'>
          <h6>Admin Name</h6>
          <p>how to see look this</p>
        </div>
      </div>
      <div className='nav-dashboard-menu'>
        <div
          className='active-button'
          onClick={() => setDashboardMenu(!dashboardMenu)}>
          <h6 className='dashboard-nav-text'>Dashboard</h6>
          <img
            src={require("../assetsForNavbar/arrow-down-sign-to-navigate (1).png")}
            className={dashboardMenu ? "upArrow" : "downArrow"}
          />
        </div>

        {dashboardMenu && (
          <>
            <div className='nav-home'>
              <FontAwesomeIcon icon={faHome} className='nav-dashboard-icon' />
              <p>Home</p>
            </div>
            <div className='nav-home'>
              <FontAwesomeIcon icon={faUser} className='nav-dashboard-icon' />
              <p>User Info</p>
            </div>
            <div className='nav-home'>
              <FontAwesomeIcon
                icon={faCartShopping}
                className='nav-dashboard-icon'
              />
              <p>Your Cart</p>
            </div>
            <div className='nav-home'>
              <FontAwesomeIcon
                icon={faCircleInfo}
                className='nav-dashboard-icon'
              />
              <p>More Info</p>
            </div>
          </>
        )}
      </div>
      <div className='emp-details'>
        <div
          className='active-button'
          onClick={() => setEmpProfile(!empProfile)}>
          <h6 className='dashboard-nav-text'>Profile</h6>
          <img
            src={require("../assetsForNavbar/arrow-down-sign-to-navigate (1).png")}
            className={empProfile ? "upArrow" : "downArrow"}
          />
        </div>
        {empProfile && (
          <>
            <div className='emp-profile'>
              <FontAwesomeIcon
                icon={faUserCheck}
                className='nav-dashboard-icon'
              />
              <p>Emp Details</p>
            </div>
            <div className='emp-profile'>
              <FontAwesomeIcon icon={faClock} className='nav-dashboard-icon' />
              <p>Working Hours</p>
            </div>
            <div className='emp-profile'>
              <FontAwesomeIcon
                icon={faTableCells}
                className='nav-dashboard-icon'
              />
              <p>Leave Table</p>
            </div>
            <div className='emp-profile'>
              <FontAwesomeIcon
                icon={faMoneyBill1}
                className='nav-dashboard-icon'
              />
              <p>Emp Details</p>
            </div>{" "}
            <div className='emp-profile'>
              <FontAwesomeIcon
                icon={faOutdent}
                className='nav-dashboard-icon'
              />
              <p>Out Company</p>
            </div>
            <div className='emp-profile'>
              <FontAwesomeIcon icon={faVideo} className='nav-dashboard-icon' />
              <p>See Video </p>
            </div>
          </>
        )}
      </div>
      <div className='footer-button'>
        <Badge badgeContent={likeCount} color='primary'>
          <Button
            variant='contained'
            onClick={() => setLikeCount(likeCount + 1)}>
            <p>Like</p> <FontAwesomeIcon icon={faThumbsUp} />
          </Button>
        </Badge>
        <Badge badgeContent={disLike} color='error'>
          <Button
            variant='contained'
            color='error'
            onClick={() => setDisLike(disLike + 1)}>
            <p> Dislike</p> <FontAwesomeIcon icon={faThumbsDown} />
          </Button>
        </Badge>
      </div>
    </div>
  );
}
