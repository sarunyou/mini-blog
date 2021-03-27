import React from 'react'
import { Navbar, Nav, Icon, Dropdown } from 'rsuite';

function SimpleNavbar() {
    return (
        <Navbar>
        <Navbar.Header>
          <div className="mt-4 ml-4 font-bold ">MINI BLOG</div>
        </Navbar.Header>
        <Navbar.Body>
          <Nav pullRight>
            <Dropdown  icon={<Icon icon="avatar" />} title="Account">
              <Dropdown.Item>Sign in</Dropdown.Item>
              <Dropdown.Item>Log out</Dropdown.Item>
            </Dropdown>
          </Nav>
        </Navbar.Body>
      </Navbar>
    )
}

export default SimpleNavbar
