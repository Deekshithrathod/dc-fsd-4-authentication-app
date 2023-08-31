import "./NavBar.css";
// import { Divider, Menu, MenuItem } from "@mui/material";
import "./NavBar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { AccountCircle, ExitToApp, People } from "@mui/icons-material";
import { useState } from "react";
import { Fade } from "@mui/material";
const NavBar = () => {
  const [isRotated, setIsRotated] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleRotateClick = () => {
    setIsRotated(!isRotated);
    setChecked((prev) => !prev);
  };
  return (
    <nav>
      <div className="logo">
        <img src="/logo.svg" />
      </div>

      <div className="user-panel">
        <div className="user-img">
          <img src="/profile.png" />
        </div>
        <div className="user-name">
          <p>Deekshith</p>
        </div>
        <ArrowDropDownIcon
          onClick={handleRotateClick}
          className={`${isRotated ? "rotated" : ""}`}
        />
        <Fade in={checked}>
          <div className="menu">
            <div className="menu-item">
              <AccountCircle />
              <div className="menu-item-text">My Profile</div>
            </div>
            <div className="menu-item">
              <People />
              <div className="menu-item-text">Group Chat</div>
            </div>
            <hr />
            <div className="menu-item">
              <ExitToApp className="red" />
              <div className="menu-item-text red">Logout</div>
            </div>
          </div>
        </Fade>
      </div>
    </nav>
  );
};
export default NavBar;
