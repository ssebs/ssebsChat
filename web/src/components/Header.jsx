import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import { withRouter } from "react-router";

export const Header = props => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" expand="md">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>ssebsChat</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="ml-auto d-flex justify-content-end"
                        style={{ height: "32", maxHeight: "32" }}
                    >
                        <LinkContainer to="/convo/new">
                            <Nav.Link>Create a new Conversation</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/profile">
                            <Nav.Link>😃</Nav.Link>
                        </LinkContainer>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default withRouter(Header);
