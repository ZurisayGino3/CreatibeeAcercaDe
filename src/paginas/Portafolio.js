import React from 'react';
import '../estilos/Inicio.css';
import Cliente from '../componentes/Cliente';
import Cliente2 from '../componentes/Cliente2';
import Banner from '../componentes/Banner';

function Portafolio() {
  return (
    <>
      <div className='contenedor-carousel'>
        <Banner />
      </div>
      <div className='contenedor-portafolio'>
        <Cliente />
        <hr />
        <Cliente2 />
        <hr />
        <Cliente />
        <hr />
      </div>
    </>
  );
}

export default Portafolio;