import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Alignment,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core";

const NavBar = () => {
  return (
    <Navbar className={Classes.DARK}>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Contact Keeper</NavbarHeading>
        <NavbarDivider />
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Button className={Classes.MINIMAL} icon="home" text="Home" />
        </Link>
        <Button className={Classes.MINIMAL} icon="person" text="Contacts" />
        <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
          <Button className={Classes.MINIMAL} icon="help" text="About" />
        </Link>
      </NavbarGroup>
    </Navbar>
  );
};

export default NavBar;
