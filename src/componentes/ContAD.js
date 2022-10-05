import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'react-multi-carousel/lib/styles.css';
import '../estilos/Proyectos.css';
import '../estilos/Cliente.css';

function ContAD() {
  return (
    <>
      <Container className='py-5 align-items-center'>
        <Row className='proyectos text-center'>
          <h2>Acerca de Creatibee</h2>
          <p>Historia corta, mision y vision de la empresa </p>
        </Row>
        <Row className="container-cliente pt-5" >
            <img
              className='hexagonos' 
              src={require('../imagenes/banner1.jpg')}
              alt='Banner acercade'
            />
        </Row>
      </Container>
    </>
  );
}

export default ContAD;