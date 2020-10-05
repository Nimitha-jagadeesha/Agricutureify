import React, { Component } from "react";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
const image1 = require("../assets/download.jpg");

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isAuthenticated: true,
      name:'Nimitha.J'
    };
  }

  toggleNav=()=> {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  renderNavItem = () => {
    if (this.state.isAuthenticated) {
      return (
        <Nav className="ml-auto" navbar>
        <NavItem>
        <NavLink className="nav-link" to="/profile">
          <span className="fa fa-user-circle fa-lg"></span> {this.state.name}
        </NavLink>
      </NavItem>
          <NavItem>
            <NavLink
              className="nav-link"
              to="/home"
              onClick={() => {
                this.setState({
                  isAuthenticated: false,
                });
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

  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src={image1} height="30" width="30" alt="AgroConnect" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
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
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    Us
                  </NavLink>
                </NavItem>
              </Nav>
              {this.renderNavItem()}
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Header;
