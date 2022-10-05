import React from 'react';
import '../estilos/Inicio.css';
import CarouselVideo from '../componentes/CarouselVideo';
import Nosotros from '../componentes/Nosotros';
import Elegirnos from '../componentes/Elegirnos';
import Proyectos from '../componentes/Proyectos';


function Inicio() {
  return (
    <>
      <div className='contenedor-carousel'>
        <CarouselVideo />
      </div>
      <div className='contenedor-somos'>
        <Nosotros />
      </div>
      <div className='contenedor-elegirnos'>
        <Elegirnos />
      </div>
      <div className='contenedor-proyectos'>
        <Proyectos />
      </div>
    </>
  );
}

export default Inicio;
