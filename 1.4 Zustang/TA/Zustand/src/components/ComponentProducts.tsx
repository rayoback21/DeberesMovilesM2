import React from "react";
import { useCandyStore } from "../stores/candy/candy.store";

const Product: React.FC = () => {
  const candyId = React.useRef<number>(Math.random()).current;
  const { produce, distribute, quantity } = useCandyStore();

  const handleProduce = () => {
    produce('chocolate', 1);
  };

  const handleDistribute = () => {
    distribute('chocolate', 1);
  };

  return (
    <div>
      <h2>Candy {candyId}</h2>
      <button onClick={handleProduce}>Produce 1 Candy</button>
      <button onClick={handleDistribute}>Distribute 1 Candy</button>
      <div>Quantity: {quantity}</div>
    </div>
  );
};

export default Product;
