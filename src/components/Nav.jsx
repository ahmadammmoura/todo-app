import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav } from 'react-bootstrap';

function Navigation() {
  return (
    <>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">home page</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/setting'>setting</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navigation;
