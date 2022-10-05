import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../estilos/Nosotros.css';

function Nosotros() {
  return (
    <>
      <Container className='pt-5'>
        <Row>
          <Col>
            <img
              className='w-100 img-nosotros'
              src={require('../imagenes/estrategia-mkt.jpg')}
              alt='Quienes somos'
            />
          </Col>
          <Col className='nosotros'>
            <h2>¿Quienes somos?</h2>
            <p>Pequeña introducción sobre Creatibee y una pequeña introducción sobre la empresa.</p>
            <Button className='btn-nos color-1' size="md">Más sobre nosotros</Button>
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
}

export default Nosotros;