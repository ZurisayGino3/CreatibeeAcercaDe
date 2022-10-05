import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import '../estilos/Loading.css';

function Loading() {
  return (
    <>
      <div className='divPadre'>
        <div className='divHijo'>
          <Spinner className='spinner-cargando' animation="border" role="status" size='lg'>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </div>
    </>
  );
}

export default Loading;
