import { Row,Nav, NavItem, Col, Container} from "react-bootstrap";

const AppFooter = ()=> {

    return (
        <Row  >
        <Nav className="navbar-dark bg-dark mb-5 mt-3">
            <NavItem className="navbar-brand d-flex justify-content-center">© Copyright ,Designed and built by Adnan YAĞMUR</NavItem>
        </Nav>

        </Row>
    )
}

export default AppFooter;