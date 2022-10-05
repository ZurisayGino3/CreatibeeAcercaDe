import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Socios from '..componentes/socios';
import '../componentes/socios';
import '../estilos/Proyectos.css';
import Proyectos from './Proyectos';
import CartaProyecto from './CartaProyecto';

function Galeria() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <Container className='py-5 align-items-center'>
        <Row className='proyectos text-center'>
          <h2>Nuestros proyectos</h2>
          <p>Hemos trabajado con diferentes empresas y estas son sus experiencias </p>
        </Row>
        <Row>
          <Carousel
            additionalTransfrom={0}
            autoPlaySpeed={3000}
            draggable
            focusOnSelect={false}
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            slidesToSlide={1}
            swipeable
          >
            <CartaProyecto/>
            <CartaProyecto/>
            <CartaProyecto/>
            <CartaProyecto/>
            <CartaProyecto/>



          </Carousel>
        </Row>
        <Row className='mt-2'>
          <Col className='d-flex align-items-center justify-content-center'><Button className='btn-pro color-1' size="lg">Portafolio</Button></Col>
        </Row>
      </Container>
    </>
  );
}

export default Galeria;