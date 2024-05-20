import React, { useState, useEffect } from "react";

const Darts: React.FC = () => {
  const [score, setScore] = useState(0);
  const [target, setTarget] = useState({ x: 0, y: 0 });

  const generateRandomCoordinates = () => {
    const x = Math.random() * 20 - 10; // Random number between -10 and 10
    const y = Math.random() * 20 - 10; // Random number between -10 and 10
    return { x, y };
  };

  const calculatePoints = (x: number, y: number): number => {
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)); // Calculate distance from center

    if (distance > 10) {
      return 0; // Outside the target
    } else if (distance > 5) {
      return 1; // Outer circle
    } else if (distance > 1) {
      return 5; // Middle circle
    } else {
      return 10; // Inner circle
    }
  };

  const throwDart = () => {
    const newTarget = generateRandomCoordinates();
    setTarget(newTarget);
    const points = calculatePoints(newTarget.x, newTarget.y);
    setScore(score + points);
  };

  useEffect(() => {
    throwDart();
  }, []); // Throw dart when component mounts

  return (
    <div>
      <h1>Darts Game</h1>
      <p>Target Coordinates: ({target.x.toFixed(2)}, {target.y.toFixed(2)})</p>
      <p>Last Throw: {calculatePoints(target.x, target.y)} points</p>
      <p>Total Score: {score} points</p>
      <button onClick={throwDart}>Throw Dart</button>
    </div>
  );
};

export default Darts;
