import React from "react";
import { Navbar, Nav, Icon, Dropdown } from "rsuite";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth.hook";

function SimpleNavbar() {
    const { user, isLogin, logout } = useAuth();
    const history = useHistory();
    return (
        <Navbar>
            <Navbar.Header>
                <div className="mt-4 ml-4 font-bold ">MINI BLOG</div>
            </Navbar.Header>
            <Navbar.Body>
                <Nav pullRight>
                    <Dropdown
                        icon={<Icon icon="avatar" />}
                        title={user.username || "Account"}
                    >
                        {isLogin ? (
                            <Dropdown.Item
                              onClick={() => {
                                      logout();
                                      history.push("/login");
                              }}
                            >
                                Log out
                            </Dropdown.Item>
                        ) : (
                            <Dropdown.Item>
                                <Link to="/login">Log in</Link>
                            </Dropdown.Item>
                        )}
                    </Dropdown>
                </Nav>
            </Navbar.Body>
        </Navbar>
    );
}

export default SimpleNavbar;
