import { Row,Nav, NavItem, Col} from "react-bootstrap";

const AppFooter = ()=> {

    return (
        <Row  >
        <Nav className="navbar navbar-dark bg-dark mb-5 mt-3">
            <Row>
                <Col sm={2}></Col>
                <Col sm={8} >
            <NavItem className="navbar-brand">© Copyright ,Designed and built by Adnan YAĞMUR</NavItem>
            </Col>
            <Col sm={2}></Col>
            </Row>
        </Nav>

        </Row>
    )
}

export default AppFooter;