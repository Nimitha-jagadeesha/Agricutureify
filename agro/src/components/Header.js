import React, { Component, useState } from "react";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/userAction";
import Cookies from "js-cookie";
const image1 = require("../assets/download.jpg");

const Header = () => {
  const dispatch = useDispatch();
  const [isNavOpen, setState] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  var { userInfo } = userSignin;
  if (!userInfo) {
    userInfo = Cookies.get("userInfo");
    try {
      userInfo = JSON.parse(userInfo);
    } catch (err) {
      userInfo = null;
    }
  }
  const toggleNav = () => {
    setState(!isNavOpen);
  };

  const renderNavItem = () => {
    if (userInfo) {
      console.log(userInfo);
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/profile">
              <span className="fa fa-user-circle fa-lg"></span>{" "}
              {userInfo.firstname}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link"
              refresh="true"
              to="/home"
              onClick={() => {
                Cookies.remove("userInfo");
                userInfo = null;
                window.location.reload();
              }}
            >
              <span className="fa fa-sign-out fa-lg"></span> Logout
            </NavLink>
          </NavItem>
        </Nav>
      );
    } else {
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/login">
              <span className="fa fa-sign-in fa-lg"></span> Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/register">
              <span className="fa fa-sign-in fa-lg"></span> Register
            </NavLink>
          </NavItem>
        </Nav>
      );
    }
  };
  return (
    <div>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={toggleNav} />
          <NavbarBrand className="mr-auto" href="/">
            <img src={image1} height="30" width="30" alt="AgroConnect" />
          </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg"></span> About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/services">
                  <span className="fa fa-tasks fa-lg"></span> Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"></span> Contact Us
                </NavLink>
              </NavItem>
            </Nav>
            {renderNavItem()}
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};
export default Header;
