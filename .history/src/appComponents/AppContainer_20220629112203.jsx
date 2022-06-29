import {Container,Card,Button, Row, Col} from "react-bootstrap"

const AppContainer = () => {

    return (
       <Container>
        <Row>
        <Col sm={8}>sm=8</Col>
        <Col sm={4}>sm=4</Col>
            
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