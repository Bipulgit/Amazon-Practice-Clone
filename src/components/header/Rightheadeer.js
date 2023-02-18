import { useContext } from "react";
import React from "react";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import { Divider } from "@mui/material";
import "./Rightheader.css";
// import { Logincontext } from "../context/Contextprovider";

const Rightheadeer = ({ Logclose }) => {
  /* eslint-disable no-unused-vars */
  const { account, setAccount } = useContext;

  return (
    <div>
      <div className="rightheader">
        <div className="right_nav">
          {account ? (
            <Avatar className="avtar2">{account.fname[0].toUpperCase()}</Avatar>
          ) : (
            <Avatar className="avtar"></Avatar>
          )}
          {account ? <h3>Bipul,{account.fname.toUpperCase()}</h3> : ""}
        </div>
        <div className="nav_btn" onClick={() => Logclose()}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Shop By Category</NavLink>

          <Divider style={{ width: "100%", marginLeft: "-20px" }} />

          <NavLink to="/">today's Deal</NavLink>
          {account ? (
            <NavLink to="/buynow">Your Order</NavLink>
          ) : (
            <NavLink to="/login">Your Order</NavLink>
          )}

          <Divider style={{ width: "100%", marginLeft: "-20px" }} />

          <div className="flag">
            <NavLink to="/">Settings</NavLink>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightheadeer;
