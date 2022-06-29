import { Row,Nav, NavItem, Col} from "react-bootstrap";

const AppFooter = ()=> {

    return (
        <Row  >
        <Nav className="navbar navbar-dark bg-dark mb-5 mt-3">
            <Row>
                <Col></Col>
            <NavItem className="navbar-brand">© Copyright ,Designed and built by Adnan YAĞMUR</NavItem>
            </Row>
        </Nav>

        </Row>
    )
}

export default AppFooter;