import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import '../estilos/Navegacion.css'
import { Link } from 'react-router-dom';

function Navegacion() {
  window.addEventListener("scroll", (e) => {
    var barra = document.getElementById('nav');
    let scrollY = window.scrollY;
    if (scrollY >= 500) {
      if (barra.classList.contains('animacion-quitar-color')) {
        barra.classList.remove('animacion-quitar-color');
      }
      barra.classList.add('animacion-color');
    } else {
      if (barra.classList.contains('animacion-color')) {
        barra.classList.remove('animacion-color');
        barra.classList.add('animacion-quitar-color');
      }
    }
  });
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar id='nav' key={expand} bg="none" variant="dark" expand={expand} className='mb-3' fixed='top'>
          <Container fluid>
            <Navbar.Brand href="#">
              <img
                className='logo-creatibee'
                src={require('../imagenes/LogoCreatibee-10.png')}
                alt='Logo'
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to='/' className='nav-link active link'>Inicio</Link>
                  <Link to='/acercade' className='nav-link link'>Nosotros</Link>
                  <Link className='nav-link link'>Servicios</Link>
                  <Link to='/portafolio'  className='nav-link link'>Portafolio</Link>
                  <Link className='nav-link link'>Blog</Link>
                  <Link className='nav-link'><Button className='btn-nav' size="sm">Contáctanos</Button></Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navegacion;