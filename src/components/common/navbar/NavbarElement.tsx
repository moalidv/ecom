import { Container, Nav, Navbar } from "react-bootstrap";
// import Navbar from "react-bootstrap/Navbar";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const { navbar } = styles;

export const NavbarElement = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="categories">
            Categories
          </Nav.Link>
          <Nav.Link as={Link} to="about">
            About
          </Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="login">
            login
          </Nav.Link>
          <Nav.Link as={Link} to="signup">
            sign up
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarElement;
