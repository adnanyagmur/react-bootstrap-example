import  Appbar  from "./appComponents/Appbar.jsx";
import Container from "./appComponents/Container.jsx";
import Slider from "./appComponents/Slider.jsx";

function App() {
 
 return (
 <div className="container">
  
  <div>
<Appbar></Appbar>
</div>
<div></div>
<div>
<Slider></Slider>
</div>
<div>
  <Container></Container>
</div>
  </div>
  );
}

export default App;
