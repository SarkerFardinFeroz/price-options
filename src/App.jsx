import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {

  return (
    <div className="max-w-7xl mx-auto">
      <NavBar />

      <PriceOptions />
      <Phones />
    </div>
  );
}

export default App;
