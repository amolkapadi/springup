import { Route, Routes } from "react-router-dom"


import Customer from "./component/Customer";
import Home from "./component/Home";
import Locations from "./component/Locations";
import Model from "./component/Model";
import Services from "./component/Services";
import Team from "./component/Team";
import Header from "./page/Header";

function App() {
  return (
  <>
    <Header />
    <Routes>
             <Route path="/"  element={<Home />} />
             <Route path="/model" exact element={<Model />} />
             <Route path="/services"  element={<Services />} />
             <Route path="/team"  element={<Team />} />
             <Route path="/locations"  element={<Locations />} />
             <Route path="/customer"  element={<Customer />} />
     </Routes>      
   
  </>
  );
}

export default App;
