import React from 'react';
import Card from 'react-bootstrap/Card';
import '../estilos/CartaProyecto.css';
import '../estilos/equipo.css';

function CartaProyecto2() {
    return (
        <>
            <Card className='shadow border-0 m-4' style={{ width: '0rem' }}>
                <Card.Img  className='clipped-border' variant='top'  src={require('../imagenes/banner3.jpg')} />
                <Card.Body className='text-center'>
                    <Card.Title className='titulo'> ... </Card.Title>
                    
                </Card.Body>
            </Card>
        </>
    );
}
export default CartaProyecto2;