import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

const NavBarDropDown = (props: any) => {
  console.log(props);
  const elementsToRender: any = [];
  props?.data.forEach((eachLink: any) => {
    elementsToRender.push(
      <Nav.Link href="#home" key={eachLink.name}>
        {eachLink.name}
      </Nav.Link>
    );
  });
  return elementsToRender;
};
export default NavBarDropDown;
