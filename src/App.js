import "bootstrap/dist/css/bootstrap.min.css";
import MainContainer from "./components/MainContainer";
//Another approach to setup main container >> import CocktailsContainer from "./components/CocktailsContainer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleDrink from "./components/SingleDrink";
import About from "./components/pages/About";
import Error from "./components/pages/Error";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="about" element={<About />} />
        <Route path="cocktail/:id" element={<SingleDrink />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
