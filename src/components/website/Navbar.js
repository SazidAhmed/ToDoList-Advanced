import { Container, Navbar, Nav } from 'react-bootstrap';

const Topnav = () => {
    return (  
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">TasksOnTime</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Tasks</Nav.Link>
          <Nav.Link href="#about">Crews</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    );
}
 
export default Topnav;