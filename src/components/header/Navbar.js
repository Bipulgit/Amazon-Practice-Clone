import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import Rightheader from "./Rightheadeer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import "./navbar.css";
// /* eslint-disable no-unused-vars */
const Navbar = () => {
  const [dropen, setDroper] = useState(false);

  const handleopen = () => {
    setDroper(true);
  };

  const handledrclose = () => {
    setDroper(false);
  };

  return (
    <header>
      <nav>
        <div className="left">
          <IconButton className="hamburgur" onClick={handleopen}>
            <MenuIcon style={{ color: "#fff" }} />
          </IconButton>

          <Drawer open={dropen} onClose={handledrclose}>
            <Rightheader Logclose={handledrclose} />
          </Drawer>
          <div className="navlogo">
            <NavLink to="/">
              <img src="./amazon_PNG25.jpg" alt="" />
            </NavLink>
          </div>

          <div className="nav_searchbar">
            <input
              type="text"
              name=""
              id=""
              placeholder="'search your Intrest'"
            />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
          </div>
        </div>

        <div className="right">
          <div className="nav_btn">
            <NavLink to="/login">Hello, Sign-in</NavLink>
          </div>
          <div className="cart_btn">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon id="icon" />
            </Badge>
            <p>Cart</p>
          </div>
          <Avatar className="avatar" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
