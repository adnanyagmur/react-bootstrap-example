import { Row,Nav, NavItem} from "react-bootstrap";

const AppFooter = ()=> {

    return (
        <Row  >
        <Nav className="navbar navbar-dark bg-dark mb-5 mt-3">
            <Row>
            <NavItem className="navbar-brand">© Copyright ,Designed and built by Adnan YAĞMUR</NavItem>
            </Row>
        </Nav>

        </Row>
    )
}

export default AppFooter;