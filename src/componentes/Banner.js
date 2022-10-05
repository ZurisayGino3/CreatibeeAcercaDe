import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import '../estilos/Banner.css'

function Banner() {
  return (
    <>
      <Carousel indicators={false} controls={false}>
        <Carousel.Item>
          <img
            className='w-100'
            src={require('../imagenes/banner1.jpg')}
            alt='Banner portafolio'
          />
          <Carousel.Caption className='contenedor-caption'>
            <h1>Imagen portafolio y frase sobre Creatibee</h1>
            <Button className='mt-4 btn-car' size="lg">Contáctanos</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Banner;