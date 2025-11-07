import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Brand from "./Brand";
import MenuLinks from "./MenuLinks";

const NavBar = (props: any) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Brand data={props?.data?.brand} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <MenuLinks data={props?.data?.navBarLink} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
