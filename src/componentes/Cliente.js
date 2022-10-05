import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../estilos/Cliente.css';
import ModalVideo from './ModalVideo';

function Cliente() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Container className="container-cliente pt-5" >
        <h2 className='mb-4 nombre-cliente text-end'>Nombre del proyecto o empresa</h2>
        <Row>
          <Col xs={12} md={6}>
            <img
              className='hexagono'
              src={require('../imagenes/banner3.jpg')}
              alt='Banner portafolio'
              onClick={() => setModalShow(true)}
            />
          </Col>
          <Col xs={12} md={6}>
            <p className='texto-cliente align-items-start'>
              Resumen o explicación del trabajo que se realizó para el proyecto o empresa mencionando objetivo y logros
            </p>
          </Col>
        </Row>
        <Row className='align-items-end sobreponer'>
          <Col xs={12} md={6}>
            <p className='texto-cliente'>
              Resumen o explicación del trabajo que se realizó para el proyecto o empresa mencionando objetivo y logros
            </p>
          </Col>
          <Col xs={12} md={6}>
            <img
              className='hexagono'
              src={require('../imagenes/banner3.jpg')}
              alt='Banner portafolio'
              onClick={() => setModalShow(true)}
            />
          </Col>
        </Row>
      </Container>
      <ModalVideo
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Cliente;