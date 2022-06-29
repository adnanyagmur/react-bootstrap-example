import {Nav,Placeholder,Accordion,Container,Card,Button, Row, Col} from "react-bootstrap"

const AppContainer = () => {

    return (
       <Container>
        <Row className="pt-5">
        <Nav className="navbar navbar-dark bg-dark mb-5 mt-3"></Nav>
        </Row>
        <Row className="pt-5 pb-5">
        <Col sm={8}>
    <Accordion  >
  <Accordion.Item eventKey="0"  >
    <Accordion.Header >Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
            </Col>
        <Col sm={4}>
        <Card>
      <Card.Header>
        <Nav className="navbar-dark bg-dark" variant="tabs" defaultActiveKey="#first">
          <Nav.Item className="navbar-brand">
           Active
          </Nav.Item>
          <Nav.Item className="navbar-brand">
           Link
          </Nav.Item>
          <Nav.Item className="navbar-brand">
            
              Disabled
           
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>
            
        </Col>
            
        </Row>
        <Row className="pb-5">
        <Nav className="navbar navbar-dark bg-dark mb-5 mt-3"></Nav>

        </Row>
        <Row className="pb-5">
            <Col><Card style={{ width: '18rem' }}>
                
                <Card.Img className="p-3" variant="top" src="https://picsum.photos/200/200" />
                
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                </Card.Body>
            </Card></Col>
            <Col><Card style={{ width: '18rem' }}>
                
                <Card.Img className="p-3" variant="top" src="https://picsum.photos/200/200" />
                
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                </Card.Body>
            </Card></Col>
            <Col><Card style={{ width: '18rem' }}>
                
                <Card.Img className="p-3" variant="top" src="https://picsum.photos/200/200" />
                
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                </Card.Body>
            </Card></Col>
            <Col>
            <Card style={{ width: '18rem' }}>
                
                <Card.Img className="p-3" variant="top" src="https://picsum.photos/200/200" />
                
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            </Container>
     

    )
}

export default AppContainer;