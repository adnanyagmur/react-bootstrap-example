import  Appbar  from "./appComponents/Appbar.jsx";
import AppContainer from "./appComponents/AppContainer.jsx";
import Slider from "./appComponents/Slider.jsx";

function App() {
 
 return (
 <div className="container">
  
  <div>
<Appbar></Appbar>
</div>
<div>
<Slider></Slider>
</div>
<div>
  <AppContainer></AppContainer>
</div>
  </div>
  );
}

export default App;
