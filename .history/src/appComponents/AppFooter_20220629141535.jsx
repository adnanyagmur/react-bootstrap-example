import { Row,Nav, NavItem, Col, Container} from "react-bootstrap";

const AppFooter = ()=> {

    return (
      
        <Nav className="navbar navbar-dark bg-dark mt-3">
            <Row>
                <Col></Col>
            <NavItem className="navbar-brand justify-content-center"> © Copyright ,Designed and built by Adnan YAĞMUR</NavItem>
            <Col></Col>
            </Row>
        </Nav>

   
    )
}

export default AppFooter;