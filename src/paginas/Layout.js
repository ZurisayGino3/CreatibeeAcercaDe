import React from 'react';
import { Outlet } from 'react-router-dom';
import Navegacion from '../componentes/Navegacion';
import PiePagina from '../componentes/PiePagina'
import BotonesFlotantes from '../componentes/BotonesFlotantes';

function Layout() {
  return (
    <>
      <div>
        <div className='contenedor-navbar'>
          <Navegacion />
        </div>
        <Outlet />
        <div className='contenedor-pie'>
          <PiePagina />
        </div>
        <div className='botones-flotantes'>
          <BotonesFlotantes />
        </div>
      </div>
    </>
  );
}

export default Layout;
