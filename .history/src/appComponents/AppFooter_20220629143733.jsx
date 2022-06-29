import { Row,Nav, NavItem, Col, Container} from "react-bootstrap";

const AppFooter = ()=> {

    return (
      
        <Nav className="navbar navbar-dark bg-dark mt-3">
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
            <NavItem className="navbar-brand d-flex justify-content-center"> © Copyright ,Designed and built by Adnan YAĞMUR</NavItem>
            </Col>
            <Col sm={1}></Col>
            </Row>
        </Nav>

   
    )
}

export default AppFooter;