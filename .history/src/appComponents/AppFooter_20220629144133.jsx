import { Row,Nav, NavItem, Col, Container} from "react-bootstrap";

const AppFooter = ()=> {

    return (
      
        <Nav className="navbar navbar-dark bg-dark mt-3">
            <Row>
               
           <div className="text-center">© Copyright ,Designed and built by Adnan YAĞMUR</div>
          
            </Row>
            <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
        </Nav>

   
    )
}

export default AppFooter;