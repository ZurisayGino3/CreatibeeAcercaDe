import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import '../estilos/Banner.css'

function BannerAD() {
  return (
    <>
      <Carousel indicators={false} controls={false}>
        <Carousel.Item>
          <img
            className='w-100'
            src={require('../imagenes/bannerAD.jpg')}
            alt='Banner acercade'
          />
          <Carousel.Caption className='contenedor-caption'>
            <h1>Banner de inicio y frase sobre Creatibee</h1>
            <Button className='mt-4 btn-car' size="lg">Contáctanos</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default BannerAD;