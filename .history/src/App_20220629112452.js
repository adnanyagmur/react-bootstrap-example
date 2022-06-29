import { Container } from "react-bootstrap";
import  Appbar  from "./appComponents/Appbar.jsx";
import AppContainer from "./appComponents/AppContainer.jsx";
import Slider from "./appComponents/Slider.jsx";

function App() {
 
 return (
<Container>
  
  
<Appbar></Appbar>

<Slider></Slider>


  <AppContainer></AppContainer>
  </Container>
  );
}

export default App;
