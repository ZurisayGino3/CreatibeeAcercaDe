import React from 'react';
import '../estilos/Inicio.css';
import BannerAD from '../componentes/BannerAD';
import ContAD from '../componentes/ContAD';
import Proyectos2 from '../componentes/Proyectos2';
import Tarjetas from '../componentes/tarjetas';

function AcercaDe() {
  return (
    <>
      <div className='contenedor-carousel'>
        <BannerAD />
      </div>
      <div className='contenedor-portafolio'>
        <ContAD/>
        <hr /> 
        <Tarjetas />
        <hr /> 
        <Proyectos2 />
        <hr />
      </div>
    </>
  );
}

export default AcercaDe;