import React, { useState } from 'react';

interface Planets {
  [key: string]: number;
}

const earthOrbitalPeriod = 31557600;

const planetAge: Planets = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}

const AgeCalculator: React.FC = () => {
  const [planet, setPlanet] = useState<string>('earth');
  const [seconds, setSeconds] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const calculateAge = () => {
    const age = Number((seconds * earthOrbitalPeriod / planetAge[planet]).toFixed(2));
    setResult(age);
  };

  return (
    <div>
      <label>
        Planet:
        <select value={planet} onChange={(e) => setPlanet(e.target.value)}>
          {Object.keys(planetAge).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Seconds:
        <input type="number" value={seconds} onChange={(e) => setSeconds(Number(e.target.value))} />
      </label>
      <br />
      <button onClick={calculateAge}>Calculate Age</button>
      <br />
      {result !== null && <p>Age on {planet}: {result}</p>}
    </div>
  );
};

export default AgeCalculator;
