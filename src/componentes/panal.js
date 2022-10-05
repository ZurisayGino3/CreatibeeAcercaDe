import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../estilos/equipo.css';
import '../estilos/Nosotros.css'; 
import '../estilos/equipo.css';
import '../estilos/panal.css'

function Panal() { 
  return (
    <>
      <Container className="container-cliente pt-5" >
        <h2 className='mb-4 nombre-cliente'>Conoce a nuestro equipo de desarrollo</h2>
        <Row>
          <Col xs={12} md={6}>
            <p className='texto-cliente align-items-start'>
              Resumen o explicación del trabajo que se realiza cada departamento dentro de la empresa
            </p>
          </Col>
          <Col xs={12} md={6}>
            <img
              className='hexagono'
              src={require('../imagenes/banner1.jpg')}
              alt='Banner portafolio'
              
            />
          </Col>
        </Row>
        <Row className='align-items-end sobreponer'>
          <Col xs={12} md={6}>
            <img
              className='hexagono'
              src={require('../imagenes/banner2.jpg')}
              alt='Banner portafolio'
            
            />
          </Col>
          <Col xs={12} md={6}>
            <p className='texto-cliente'>
            Resumen o explicación del trabajo que se realiza cada departamento dentro de la empresa
            </p>
          </Col>
        </Row>
      </Container> <Container className="container-cliente pt-5" >
        <Row>
          <Col xs={12} md={6}>
            <img
              className='hexagono'
              src={require('../imagenes/banner3.jpg')}
              alt='Banner portafolio'
            
            />
          </Col>
          <Col xs={12} md={6}>
            <p className='texto-cliente align-items-start'>
            Resumen o explicación del trabajo que se realiza cada departamento dentro de la empresa
            </p>
          </Col>
        </Row>
        <Row className='align-items-end sobreponer'>
          <Col xs={12} md={6}>
            <p className='texto-cliente'>
            Resumen o explicación del trabajo que se realiza cada departamento dentro de la empresa
            </p>
          </Col>
          <Col xs={12} md={6}>
            <img
              className='hexagono'
              src={require('../imagenes/banner1.jpg')}
              alt='Banner portafolio'
             
            />
          </Col>
        </Row>
      </Container>
      <Container className="container-cliente pt-5" >
       
        <Row>
          <Col xs={12} md={6}>
            <p className='texto-cliente align-items-start'>
            Resumen o explicación del trabajo que se realiza cada departamento dentro de la empresa
            </p>
          </Col>
          <Col xs={12} md={6}>
            <img
              className='hexagono'
              src={require('../imagenes/banner2.jpg')}
              alt='Banner portafolio'
              
            />
          </Col>
        </Row>
        <Row className='align-items-end sobreponer'>
          <Col xs={12} md={6}>
            <img
              className='hexagono'
              src={require('../imagenes/banner3.jpg')}
              alt='Banner portafolio'
            
            />
          </Col>
          <Col xs={12} md={6}>
            <p className='texto-cliente'>
            Resumen o explicación del trabajo que se realiza cada departamento dentro de la empresa
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Panal;