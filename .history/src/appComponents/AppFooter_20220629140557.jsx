import { Row,Nav, NavItem, Col, Container} from "react-bootstrap";

const AppFooter = ()=> {

    return (
        <Row  >
        <Nav className="navbar navbar-dark bg-dark mb-5 mt-3">
           <Container>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8} >
            <NavItem className="navbar-brand"><a className="text-center">© Copyright ,Designed and built by Adnan YAĞMUR</a></NavItem>
            </Col>
            <Col sm={2}></Col>
            </Row>
            </Container>
        </Nav>

        </Row>
    )
}

export default AppFooter;