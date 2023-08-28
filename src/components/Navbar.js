import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useGlobalState } from "../context/GlobalState";
import authService from "../services/auth.service";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function CustomNavbar() {
  const { state, dispatch } = useGlobalState();
  const router = useRouter();

  const handleLogout = () => {
    authService.logout();
    dispatch({ type: "LOGOUT_USER" });
    router.push("/");
  };

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
            {state.user && <Nav.Link href="/favoritesPage">Favorites</Nav.Link>}
          </Nav>
          <Nav>
            {state.user ? (
              <Nav.Link href="/profile">
                <FontAwesomeIcon icon={faUser} style={{ color: "#feffff" }} />
              </Nav.Link>
            ) : null}
            {state.user ? (
              <Nav.Link
                className="p-3 justify-content-end"
                onClick={handleLogout}
              >
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link className="p-3 justify-content-end" href={`/login`}>
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
