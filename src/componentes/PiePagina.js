import React from 'react';
import { BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../estilos/PiePagina.css';

function PiePagina() {
  return (
    <>
      <Container className='pie-pagina'>
        <Row className='pt-3'>
        <Col className='text-white fs-4 d-flex align-items-start justify-content-start ms-5'>
            <a href='#'><FaFacebookF/></a>
            <a href='#'><BsInstagram/></a>
            <a href='#'><BsYoutube/></a>
            <a href='#'><BsTwitter/></a>
            <a href='#'><AiOutlineMail/></a>
          </Col>
          <Col  className='text-white text-end me-5'>
          <p>Todos los derechos reservados para <br/> Creatibee 2022</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PiePagina;