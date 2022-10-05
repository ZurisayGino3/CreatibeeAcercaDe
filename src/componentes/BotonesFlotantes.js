import React from 'react';
import '../estilos/BotonesFlotantes.css';
import { BsWhatsapp, BsChatDots } from 'react-icons/bs';

function BotonesFlotantes() {
  return (
    <>
      <a href='#' class='whatsapp' target='_blank'><i><BsWhatsapp/></i></a>
      <a href='#' class='chatbox' target='_blank'><i><BsChatDots /></i></a>
    </>
  );
}

export default BotonesFlotantes;