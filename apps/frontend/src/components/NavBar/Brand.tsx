import Navbar from "react-bootstrap/Navbar";

const NavBar = (props: any) => {
  return <Navbar.Brand href="#home">{props?.data?.projectName}</Navbar.Brand>;
};
export default NavBar;
