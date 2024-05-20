import React, { ChangeEvent, useState } from "react";

const isPangram = (sentence: string): boolean => {
  sentence = sentence.toLowerCase();
  return [..."un cigarrillo"].every((c) => sentence.includes(c));
};

const PangramChecker: React.FC = () => {
  const [sentence, setSentence] = useState("");
  const [isPangramResult, setIsPangramResult] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSentence(event.target.value);
  };

  const handleCheck = () => {
    setIsPangramResult(isPangram(sentence));
  };

  return (
    <div>
      <h1>Pangram Checker</h1>
      <label htmlFor="sentence">Enter a sentence:</label>
      <input
        type="text"
        id="sentence"
        value={sentence}
        onChange={handleChange}
      />
      <button onClick={handleCheck}>Check</button>
      <p>{isPangramResult ? "It is a pangram!" : "It is not a pangram."}</p>
    </div>
  );
};

export default PangramChecker;
