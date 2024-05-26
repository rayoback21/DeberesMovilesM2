// DistributeButton
import React from "react";
import { useCandyStore } from "../stores/candy/candy.store";

const DistributeButton: React.FC = () => {
  const distribute = useCandyStore((state: { distribute: any; }) => state.distribute);

  const handleDistribute = () => {
    distribute(1); // Puedes cambiar la cantidad según las necesidades
  };

  return <button onClick={handleDistribute}>Distribute Candy</button>;
};

export default DistributeButton;
