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
import { Link } from "react-router-dom";


function Navigation() {
  return (
    <>
      <Navbar style={{background: Colors.DARK_GRAY3,color: Colors.BLUE3}}>
        <NavbarGroup >
          <NavbarHeading>TODO APP...</NavbarHeading>
          <NavbarDivider />
          <Link to='/'><Button style={{color: Colors.BLUE3}} className={Classes.MINIMAL} icon="home" text="Home"/></Link>
          <Link to='/setting'><Button style={{color: Colors.BLUE3}} className={Classes.MINIMAL} icon="build" text="setting"/></Link>
        </NavbarGroup>
      </Navbar>
    </>
  );
}

export default Navigation;
