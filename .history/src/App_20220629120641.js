import { Container } from "react-bootstrap";
import  Appbar  from "./appComponents/Appbar.jsx";
import AppContainer from "./appComponents/AppContainer.jsx";
import AppFooter from "./appComponents/AppFooter.jsx";
import Slider from "./appComponents/Slider.jsx";

function App() {
 
 return (
<Container>
  
  
<Appbar></Appbar>

<Slider></Slider>


  <AppContainer></AppContainer>
  <AppFooter></AppFooter>
  </Container>
  );
}

export default App;
