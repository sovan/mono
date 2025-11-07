import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavBarDropDown from "./NavBarDropDown";

const MenuLinks = (props: any) => {
  const elementsToRender: any = [];

  props?.data.forEach((eachLink: any) => {
    if (eachLink.type === "link") {
      elementsToRender.push(
        <Nav.Link href="#home" key={eachLink.name}>
          {eachLink.name}
        </Nav.Link>
      );
    } else {
      elementsToRender.push(
        <NavDropdown
          title="Dropdown"
          id="basic-nav-dropdown"
          key={eachLink.name}
        >
          <NavBarDropDown data={eachLink?.items} />
        </NavDropdown>
      );
    }
  });

  return elementsToRender;
};
export default MenuLinks;
