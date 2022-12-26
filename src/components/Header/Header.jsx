import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#sobre">Sobre</Nav.Link>
            <Nav.Link href="#projetos">Projetos</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/aldenir-dos-santos-5b493913b/">
              <FaLinkedin />
            </Nav.Link>
            <Nav.Link href="https://github.com/AldenirTakeshi">
              <FaGithub />
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/takeshi.js/?__coig_restricted=1">
              <FaInstagram />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
