import React from "react";
import { Navbar, Nav, Icon, Dropdown } from "rsuite";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function SimpleNavbar(props) {
  const  { user } = props
    return (
        <Navbar>
            <Navbar.Header>
                <div className="mt-4 ml-4 font-bold ">MINI BLOG</div>
            </Navbar.Header>
            <Navbar.Body>
                <Nav pullRight>
                    <Dropdown icon={<Icon icon="avatar" />} title={user.username || "Account"}>
                      {
                        user.username ? <Dropdown.Item>Log out</Dropdown.Item> 
                        : <Dropdown.Item>
                          <Link to="/login">
                          Log in
                          </Link>
                          </Dropdown.Item>
                      }
                    </Dropdown>
                </Nav>
            </Navbar.Body>
        </Navbar>
    );
}

SimpleNavbar.propTypes = {
  user: PropTypes.func,
}
export default SimpleNavbar;
