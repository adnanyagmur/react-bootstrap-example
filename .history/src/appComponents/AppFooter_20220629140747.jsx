import { Row,Nav, NavItem, Col, Container} from "react-bootstrap";

const AppFooter = ()=> {

    return (
        <Row  >
        <Nav className="navbar navbar-dark bg-dark mb-5 mt-3">
           <Container>
            <Row>
            
                <Col >
            <NavItem className="navbar-brand"><a className="d-flex justify-content-center">© Copyright ,Designed and built by Adnan YAĞMUR</a></NavItem>
            </Col>
           
            </Row>
            </Container>
        </Nav>

        </Row>
    )
}

export default AppFooter;