import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../estilos/Proyectos.css';
import CartaProyecto2 from './CartaProyecto2';

function Proyectos2() {
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
          <h2>Nuestros clientes</h2>
          <p>Hemos trabajado con diferentes empresas y este es nuestro catalogo </p>
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
            <CartaProyecto2 />
            <CartaProyecto2 />
            <CartaProyecto2 />
            <CartaProyecto2 />
            <CartaProyecto2 />
            <CartaProyecto2 />
            
          </Carousel>
        </Row>
        
       
      </Container>
    </>
  );
}

export default Proyectos2;