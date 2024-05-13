import "./App.css";
import ProduceButton from "./components/ProductionComponent";
import DistributeButton from "./components/ComponetDistribution";
import QuantityDisplay from "./components/Quantity";
import Product from "./components/ComponentProducts";

function App() {
  return (
    <div>
      <h1>Candy Candy Factory</h1>
      <div>
        <h2>Candy</h2>
        <ProduceButton />
        <DistributeButton />
        <QuantityDisplay />

        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default App;
