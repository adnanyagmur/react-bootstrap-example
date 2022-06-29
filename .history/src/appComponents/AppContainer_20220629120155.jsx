import {Accordion,Container,Card,Button, Row, Col} from "react-bootstrap"

const AppContainer = () => {

    return (
       <Container>
        <Row>
        <Col sm={8}>
    <Accordion style={{height:"90px"}}>
  <Accordion.Item eventKey="0" >
    <Accordion.Header>Accordion Item #1</Accordion.Header>
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
            
        </Col>
            
        </Row>
        <Row>
            <Col><Card style={{ width: '18rem' }}>
                
                <Card.Img className="p-3" variant="top" src="https://picsum.photos/200/200" />
                
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
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
                    <Button variant="primary">Go somewhere</Button>
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
                    <Button variant="primary">Go somewhere</Button>
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
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            </Container>
     

    )
}

export default AppContainer;