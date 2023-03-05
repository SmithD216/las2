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
                        <Navbar.Brand>Navbar</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="ml-auto">
                        <LinkContainer to="/submit">
                            <Nav.Link>Submit</Nav.Link>
                        </LinkContainer>

                        <Nav.Link href="history">History</Nav.Link>
                        <Nav.Link href="account">Account</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
