import React from 'react';
import Card from 'react-bootstrap/Card';
import '../estilos/CartaProyecto.css';

function Socios() {
    return (
        <>
            <Card className='shadow border-0 m-4' style={{ width: '14rem' }}>
                <Card.Img variant='top' src={require('../imagenes/audiovisual.jpg')} />
                <Card.Body className='text-center'>
                    <Card.Title className='titulo'>Nombre del cliente</Card.Title>
                    <Card.Text className='texto'>
                        “Aquí se insertará el testimonio del cliente y se restaltarán lás palabras clave”
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default Socios;