import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cargando from './componentes/Loading';
const Inicio = lazy(() => import('./paginas/Inicio'));
const AcercaDe= lazy(() => import('./paginas/AcercaDe'));
const Portafolio = lazy(() => import('./paginas/Portafolio'));
const Layout = lazy(() => import('./paginas/Layout'));

function App() {
  return (
    <>
      <Suspense fallback={<Cargando />}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Inicio />} />
              <Route path="acercade" element={<AcercaDe />} />
              <Route path="portafolio" element={<Portafolio />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
