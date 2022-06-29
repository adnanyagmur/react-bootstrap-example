import { Card, Col, Row} from "react-bootstrap";

const AppFooter = ()=> {

    return (
        <Card className="bg-dark text-white">
    
        <Row>
            <Col sm={3}></Col>
            <Col sm={6}>
        <Card.Title>© Copyright ,Designed and built by Adnan YAĞMUR</Card.Title>
        
        </Col>
        <Col sm={3}></Col>
        </Row>
       
        </Card>

   
    )
}

export default AppFooter;