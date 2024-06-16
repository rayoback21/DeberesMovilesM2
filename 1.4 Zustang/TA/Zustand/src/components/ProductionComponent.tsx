// ProduceButton
import React from "react";
import { useCandyStore } from "../stores/candy/candy.store";

const ProduceButton: React.FC = () => {
  const produce = useCandyStore((state: { produce: any; }) => state.produce);

  const handleProduce = () => {
    produce(1); // Puedes cambiar la cantidad según las necesidades
  };

  return <button onClick={handleProduce}>Produce Candy</button>;
};

export default ProduceButton;
