import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

function CustomNavbar() {
    return (
        <div className="d-flex justify-content-center">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/teamsDisplay">Teams</Nav.Link>
                        <Nav.Link href="/standings">Standings</Nav.Link>
                        <Nav.Link href="/playersDisplay">Players</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default CustomNavbar;