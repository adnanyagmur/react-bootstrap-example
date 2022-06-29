import { Row,Nav, NavItem, Col, Container} from "react-bootstrap";

const AppFooter = ()=> {

    return (
        <Row  >
        <Nav className="navbar navbar-dark bg-dark mt-3">
            <NavItem className="navbar-brand justify-content-center"> <div class="d-flex justify-content-center">© Copyright ,Designed and built by Adnan YAĞMUR</div></NavItem>
        </Nav>

        </Row>
    )
}

export default AppFooter;