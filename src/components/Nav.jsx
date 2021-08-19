import React, { useContext } from 'react';
import {
  Colors,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Alignment,
} from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';

function Navigation() {
  const { isLoggenIn ,logout} = useContext(AuthContext);
  return (
    <>
      <Navbar style={{ background: Colors.DARK_GRAY3, color: Colors.BLUE3 }}>
        <NavbarGroup>
          <NavbarHeading>TODO APP...</NavbarHeading>
          <NavbarDivider />
          <Link to="/">
            <Button
              style={{ color: Colors.BLUE3 }}
              className={Classes.MINIMAL}
              icon="home"
              text="Home"
            />
          </Link>
          {isLoggenIn && (
            <Link to="/setting">
              <Button
                style={{ color: Colors.BLUE3 }}
                className={Classes.MINIMAL}
                icon="build"
                text="setting"
              />
            </Link>
          )}
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          {isLoggenIn && (
            <Link to="#">
              <Button
                style={{ color: Colors.BLUE3 }}
                className={Classes.MINIMAL}
                icon="log-out"
                onClick={()=>logout()}
                text="log out"
              />
            </Link>
          )}
        </NavbarGroup>
      </Navbar>
    </>
  );
}

export default Navigation;
