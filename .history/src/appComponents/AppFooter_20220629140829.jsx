import { Row,Nav, NavItem, Col, Container} from "react-bootstrap";

const AppFooter = ()=> {

    return (
        <Row  >
        <Nav className="navbar navbar-dark bg-dark mb-5 mt-3">
          
            <NavItem className="navbar-brand d-flex justify-content-center"><a className="">© Copyright ,Designed and built by Adnan YAĞMUR</a></NavItem>
        </Nav>

        </Row>
    )
}

export default AppFooter;