import { Row,Alert} from "react-bootstrap";

const AppFooter = ()=> {

    return (
        <Row  >
        <Alert className="mt-5" variant="dark">
          This is a  alert—check it out!
        </Alert>
        </Row>
    )
}

export default AppFooter;