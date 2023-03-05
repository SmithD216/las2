import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="home">Navbar</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="submit">Submit</Nav.Link>
                        <Nav.Link href="history">History</Nav.Link>
                        <Nav.Link href="account">Account</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
