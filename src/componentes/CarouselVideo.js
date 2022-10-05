import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import '../estilos/CarouselVideo.css'

function CarouselVideo() {
  return (
    <>
      <Carousel indicators={false}>
        <Carousel.Item>
          <video className='d-block w-100' loop autoPlay muted>
            <source src={require('../videos/video.mp4')} type="video/mp4" ></source>
          </video>
          <Carousel.Caption className='contenedor-caption'>
            <h1>Video inicio y frase sobre Creatibee</h1>
            <Button className='mt-4 btn-car' size="lg">Contáctanos</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <video className='d-block w-100' loop autoPlay muted>
            <source src={require('../videos/video2.mp4')} type="video/mp4" ></source>
          </video>
          <Carousel.Caption className='contenedor-caption'>
            <h1>Video inicio y frase sobre Creative</h1>
            <Button className='mt-4 btn-car' size="lg">Contáctanos</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <video className='d-block w-100' loop autoPlay muted>
            <source src={require('../videos/video3.mp4')} type="video/mp4" ></source>
          </video>
          <Carousel.Caption className='contenedor-caption'>
            <h1>Video inicio y frase sobre Creative</h1>
            <Button className='mt-4 btn-car' size="lg">Contáctanos</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselVideo;