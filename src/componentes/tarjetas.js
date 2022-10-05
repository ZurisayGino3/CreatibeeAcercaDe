import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import '../estilos/tarjetas.css';
import '../estilos/Proyectos.css';
import '../estilos/Cliente.css';
import Row from 'react-bootstrap/Row';

function Tarjetas() {
    return (
        <><Row>
            <Container className='py-5 align-items-center'>
        <Row className='proyectos text-center'>
          <h2>Conoce a nuestro equipo de desarrollo</h2>
          <p>Explicación de la importancia del equipo</p>
        </Row>
      </Container>
       <Container className='carta-box'>
            <Card className='carta' style={{ width: '14rem' }}>
                <Card.Img className='cara' variant='top' src={('https://images.pexels.com/photos/2260936/pexels-photo-2260936.jpeg?auto=compress&cs=tinysrgb&w=600')} />
                <Card.Img className='cara detras' variant='top' src={('https://images.pexels.com/photos/6574502/pexels-photo-6574502.jpeg?auto=compress&cs=tinysrgb&w=600')} />
            </Card>
            </Container>
            <Container className='carta-box'>
            <Card className='carta' style={{ width: '14rem' }}>
                <Card.Img className='cara' variant='top' src={('https://images.pexels.com/photos/2260936/pexels-photo-2260936.jpeg?auto=compress&cs=tinysrgb&w=600')} />
                <Card.Img className='cara detras' variant='top' src={('https://images.pexels.com/photos/6574502/pexels-photo-6574502.jpeg?auto=compress&cs=tinysrgb&w=600')} />
            </Card>
            </Container>
            <Container className='carta-box'>
            <Card className='carta' style={{ width: '14rem' }}>
                <Card.Img className='cara' variant='top' src={('https://images.pexels.com/photos/2260936/pexels-photo-2260936.jpeg?auto=compress&cs=tinysrgb&w=600')} />
                <Card.Img className='cara detras' variant='top' src={('https://images.pexels.com/photos/6574502/pexels-photo-6574502.jpeg?auto=compress&cs=tinysrgb&w=600')} />
            </Card>
            </Container>
            <Container className='carta-box'>
            <Card className='carta' style={{ width: '14rem' }}>
                <Card.Img className='cara' variant='top' src={('https://images.pexels.com/photos/2260936/pexels-photo-2260936.jpeg?auto=compress&cs=tinysrgb&w=600')} />
                <Card.Img className='cara detras' variant='top' src={('https://images.pexels.com/photos/6574502/pexels-photo-6574502.jpeg?auto=compress&cs=tinysrgb&w=600')} />
            </Card>
            </Container>
            <Container className='carta-box'>
            <Card className='carta' style={{ width: '14rem' }}>
                <Card.Img className='cara' variant='top' src={('https://images.pexels.com/photos/2260936/pexels-photo-2260936.jpeg?auto=compress&cs=tinysrgb&w=600')} />
                <Card.Img className='cara detras' variant='top' src={('https://images.pexels.com/photos/6574502/pexels-photo-6574502.jpeg?auto=compress&cs=tinysrgb&w=600')} />
            </Card>
            </Container>
            <Container className='carta-box'>
            <Card className='carta' style={{ width: '14rem' }}>
                <Card.Img className='cara' variant='top' src={('https://images.pexels.com/photos/2260936/pexels-photo-2260936.jpeg?auto=compress&cs=tinysrgb&w=600')} />
                <Card.Img className='cara detras' variant='top' src={('https://images.pexels.com/photos/6574502/pexels-photo-6574502.jpeg?auto=compress&cs=tinysrgb&w=600')} />
            </Card>
            </Container>
            </Row>
        </>
    );
}

export default Tarjetas;