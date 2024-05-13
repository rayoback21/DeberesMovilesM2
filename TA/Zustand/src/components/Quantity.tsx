import React from "react";
import { useCandyStore} from '../stores/candy/candy.store';

const QuantityDisplay: React.FC = () => {
  const quantity = useCandyStore((state) => state.quantity);

  return <div>Quantity: {quantity}</div>;
};

export default QuantityDisplay;
