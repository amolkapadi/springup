import Header from "./page/Header";
import Model from "./component/Model";
import Services from './component/Services'
import Team from './component/Team'
import Locations from './component/Locations'
import Customer from "./component/Customer";
import Footer from "./page/Footer";
import Whyus from "./component/Whyus";
import Particle from "./component/Particle";
function App() {
  return (
  <>

    <Header />
  
    <Model />
    <Services />
    <Whyus />
    <Customer />
    {/* <Team />
    <Locations />
    <Customer /> */}
    <Footer /> 
<Particle />

  </>
  );
}

export default App;
