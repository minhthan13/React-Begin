import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);
  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="/">Minh Than</Navbar.Brand> */}
        <NavLink to="/" className="navbar-brand">
          React App
        </NavLink>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/users" className="nav-link">
              User
            </NavLink>
            <NavLink to="/admins" className="nav-link">
              Admin
            </NavLink>
          </Nav>
          {/* dropdown */}
          <Nav>
            {isAuthenticated === false ? (
              <>
                <button className="btn-login" onClick={() => handleLogin()}>
                  Log In
                </button>
                <button className="btn-signup" onClick={() => handleRegister()}>
                  Sign Up
                </button>
              </>
            ) : (
              <NavDropdown title="Setting" id="basic-nav-dropdown">
                {/* <NavDropdown.Item>Log in</NavDropdown.Item> */}
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item>Log out</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
