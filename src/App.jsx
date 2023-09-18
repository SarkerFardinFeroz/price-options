import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <NavBar />
      <h1 className="text-7xl bg-rose-900">Vite + React</h1>
      <PriceOptions />
    </>
  );
}

export default App;
