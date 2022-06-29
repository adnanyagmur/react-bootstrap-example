import { Card, Col, Row} from "react-bootstrap";

const AppFooter = ()=> {

    return (
        <Card className="bg-dark text-white">
        <Row>
            <Col sm={4}></Col>
            <Col sm={5}>
        <Card.Title>© Copyright ,Designed and built by Adnan YAĞMUR</Card.Title>
        
        </Col>
        <Col sm={3}></Col>
        </Row>
        </Card>

   
    )
}

export default AppFooter;