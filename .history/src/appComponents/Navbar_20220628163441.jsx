import { Navbar,Container,Nav } from "react-bootstrap";

const Appbar =()=>{

    return(
   <Container>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link>Home</Nav.Link>
      <Nav.Link >Features</Nav.Link>
      <Nav.Link >Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </Container>
    )
}

export default Appbar;