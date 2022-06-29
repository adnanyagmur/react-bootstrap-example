import { Row,Nav, NavItem} from "react-bootstrap";

const AppFooter = ()=> {

    return (
        <Row  >
        <Nav className="navbar navbar-dark bg-dark mb-5 mt-3">

            <NavItem className="navbar-brand ml-auto">© Copyright ,Designed and built by Adnan YAĞMUR</NavItem>
        </Nav>

        </Row>
    )
}

export default AppFooter;