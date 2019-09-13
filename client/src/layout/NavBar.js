import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
// import Dialog from "./Dialog";

import {
  Button,
  Alignment,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core";

import Dialog from "./Dialog";

class NavBar extends Component {
  state = { isOpen: false };

  render() {
    return (
      <div className="navbar">
        <Navbar className={Classes.DARK}>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Contact Keeper</NavbarHeading>
            <NavbarDivider />

            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Button className={Classes.MINIMAL} icon="home" text="Home" />
            </Link>

            <Button
              onClick={e => this.setState({ isOpen: true })}
              className={Classes.MINIMAL}
              icon="person"
              text="Contacts"
            />

            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button className={Classes.MINIMAL} icon="help" text="About" />
            </Link>

            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button className={Classes.MINIMAL} icon="help" text="Login" />
            </Link>

            <Link
              to="/register"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button className={Classes.MINIMAL} icon="help" text="Register" />
            </Link>
          </NavbarGroup>
        </Navbar>
        <Dialog isOpen={this.state.isOpen} />
      </div>
    );
  }
}

export default NavBar;
