import {Container, Card, Button } from 'react-bootstrap';
import cabImage from '../images/carImage.jpeg'
import './Hero.css'
import { LinkContainer } from 'react-router-bootstrap'

const Hero = () => {
   return (
    <div className='py-5'>
         <Container className='d-flex justify-content-center '>
         <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
         <h1 style={{ color: 'teal', fontWeight: 'bold' }}>RuNwAy Cabs</h1>        
          <Card.Img variant='top' src={cabImage} alt='Cab' className='mb-3' style={{ width: '300px' }} />
          <p style={{ color: 'magenta', fontWeight: 'bold' }}>
          Smiles for Miles
          </p>
          <div className='d-flex'>
            <LinkContainer to='/login'>
            <Button variant='primary' className='me-3'>
              Sign In
            </Button>
            </LinkContainer>
            <LinkContainer to='/register'>
            <Button variant='secondary'>
              Sign Up
            </Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;    
   