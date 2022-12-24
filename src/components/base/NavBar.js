import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import routes from "../../routing/movieRoutesData";
import NavigationContext from "../../store/NavigationContext";
import { Link } from "react-router-dom";

/**
 * Navigation Bar of SPA
 */

function NavBar() {
  const navigationContext = useContext(NavigationContext);
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">MoviesApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {routes.map((route) => (
              <Nav.Link
                key={route.pageRoute}
                as={Link}
                to={route.pageRoute}
                active={navigationContext.isCurrentRoute(route.pageRoute)}
              >
                {route.navTitle}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
