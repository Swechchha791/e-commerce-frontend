import { Navbar, Nav, Container, NavDropdown, Form, Badge, InputGroup, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-dark bg-dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className='text-white'>E-Shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
              <DropdownButton id="dropdown-basic-button" title="All">
                <Dropdown.Item>Electronics</Dropdown.Item>
                <Dropdown.Item>Cars</Dropdown.Item>
                <Dropdown.Item>Books</Dropdown.Item>
              </DropdownButton>
              <Form.Control placeholder="Search in your shop ..." />
              <Button variant="warning"><i className="bi bi-search"></i></Button>
            </InputGroup>
          </Nav>
          <Nav>
            <LinkContainer to="/admin/orders">
              <Nav.Link>
                admin
                <span className='position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle'></span>
              </Nav.Link>
            </LinkContainer>
            <NavDropdown title="Swechchha" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} eventKey="/user/my-orders" to="/user/my-orders">
                My orders
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="/user" to="/user">
                My profile
              </NavDropdown.Item>
              <NavDropdown.Item>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link><Badge pill bg="success">2</Badge>
                <i className="bi bi-cart4"></i>
                <span className='ms-1'>CART</span></Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HeaderComponent;