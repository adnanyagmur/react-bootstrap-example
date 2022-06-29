import { Row,Alert} from "react-bootstrap";

const AppFooter = ()=> {

    return (
        <Row  >
        <Alert className="pt-2" variant="dark">
          This is a  alert—check it out!
        </Alert>
        </Row>
    )
}

export default AppFooter;