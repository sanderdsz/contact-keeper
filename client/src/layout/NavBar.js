import React from "react";

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
        <Button className={Classes.MINIMAL} icon="home" text="Home" />
        <Button className={Classes.MINIMAL} icon="document" text="Contacts" />
      </NavbarGroup>
    </Navbar>
  );
};

export default NavBar;
