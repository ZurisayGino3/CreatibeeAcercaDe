import React from 'react';
import Modal from 'react-bootstrap/Modal';
import '../estilos/ModalVideo.css';

function ModalVideo(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className='titulo-modal'>
            Nombre del proyecto o empresa
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <video className='w-100' controls>
            <source src={require('../videos/video.mp4')} type="video/mp4" ></source>
          </video>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalVideo;
