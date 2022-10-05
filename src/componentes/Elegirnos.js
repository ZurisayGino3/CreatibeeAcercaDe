import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../estilos/Elegirnos.css';

function Elegirnos() {
  return (
    <>
      <Container className='pt-5'>
        <Row>
          <Col className='servicios text-end'>
            <h2>¿Por qué elegirnos?</h2>
            <p>Llamado a la acción para interesar a los usuarios en nuestros servicios </p>
            <Button className='btn-ser color-1' size="md">Nuestros servicios</Button>
          </Col>
          <Col>
            <img
              className='w-100 img-servicios'
              src={require('../imagenes/redes-sociales.jpg')}
              alt='Porque elegirnos'
            />
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
}

export default Elegirnos;