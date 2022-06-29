import { Row,Nav, NavItem, Col, Container} from "react-bootstrap";

const AppFooter = ()=> {

    return (
      
        <Nav className="navbar navbar-dark bg-dark mt-3">
            <Row>
                <Col sm={5}></Col>

                <Col sm={2}>
           <div>© Copyright ,Designed and built by Adnan YAĞMUR</div>
            </Col>

            <Col sm={5}></Col>
            </Row>
        </Nav>

   
    )
}

export default AppFooter;