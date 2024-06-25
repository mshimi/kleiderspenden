
import { useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from'../../assets/logo.png';
import { Stack } from 'react-bootstrap';

export default function Header() {

    const location = useLocation();

    // current active path to decorate the active link
     let activePath =  location.pathname ;
    
  return (
    <Navbar  expand="md" className=" bg-warning shadow rounded-bottom ">
    <Container >
      <Navbar.Brand href="/"> 
      
      <Stack className='text-center me-5' direction="horizontal" gap={0}>
      <div className="p-1"> <img
              alt=""
              src={logo}
              width="35"
              height="35"
              className="d-inline-block align-top"
            /></div>
      <div className="p-2 text-center"> <h6>LächelnMacher</h6> </div>
      
    </Stack>
      
      
       </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" variant = "underline" defaultActiveKey = {activePath} >
       
          <Nav.Link  href="/">Home</Nav.Link>
          <Nav.Link href="/ziel">Ziel</Nav.Link>
          <Nav.Link href="/about">über uns</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
