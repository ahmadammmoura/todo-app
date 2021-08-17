import React from 'react';
import {
  Colors,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";


function Navigation() {
  return (
    <>
      <Navbar style={{background: Colors.DARK_GRAY3,color: Colors.BLUE3}}>
        <NavbarGroup >
          <NavbarHeading>TODO APP...</NavbarHeading>
          <NavbarDivider />
          <Button style={{color: Colors.BLUE3}} className={Classes.MINIMAL} icon="home" text="Home" />
          <Button style={{color: Colors.BLUE3}} className={Classes.MINIMAL} icon="build" text="setting" />
        </NavbarGroup>
      </Navbar>
    </>
  );
}

export default Navigation;
