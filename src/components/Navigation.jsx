import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { LinkContainer } from "react-router-bootstrap";

export default function Navigation() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <LinkContainer to="/home">
                        <Navbar.Brand>Home</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="ml-auto">
                        <LinkContainer to="/submit">
                            <Nav.Link>Submit</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/history">
                            <Nav.Link>History</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/account">
                            <Nav.Link>Account</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
