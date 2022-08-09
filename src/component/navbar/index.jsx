import {Container,Navbar, Nav} from 'react-bootstrap'
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
export default function Navbars(){
  const fromLocale = JSON.parse(localStorage.getItem('chart'));
  const [isCart, setCart] = useState(fromLocale? true : false);
const navigate = useNavigate();
  useEffect(() => {
    if(isCart){
      setCart(true)
    } else {
      setCart(false)
    }
  },[isCart])
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Test React</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
          <Nav.Link onClick={ ()=> navigate('/cart') }><i class="fa-solid fa-cart-arrow-down"></i>{isCart?<i className="text-danger fs-3">!</i> : ''}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    )
}