import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const NavBar = () =>{

    return (
       <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className='navbar-brand' to="/">Tienda Ropa Rapa</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to="/">Inicio</Link>
            {/* <Link className='nav-link' to="/">Pokemon</Link> */}
            <Link className='nav-link' to="/productos/poleras">Poleras</Link>
            <Link className='nav-link' to="/productos/zapatillas">Zapatillas</Link>
            <Link className='nav-link' to="/nosotros">Nosotros</Link>
            <Link className='nav-link' to="/contacto">Contacto</Link>
            
          </Nav>
          <Nav>
          
            <Nav.Link href="">

            {/* <Button variant="primary">
            Carrito de Compras <Badge bg="secondary">9</Badge>
            <span className="visually-hidden">Artículos en carrito</span>
            </Button> */}

            
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </>
    )
}

export default NavBar