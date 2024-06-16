import React, { useState } from 'react';

const answers: string[] = ["Whatever.", "Sure.", "Whoa, chill out!", "Calm down, I know what I'm doing!"];

const Hey: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    const speech = message.trim();
    if (speech === "") {
      setResponse("Fine. Be that way!");
      return;
    }

    const isQuestion = speech.endsWith("?") ? 1 : 0;
    const isYelling = /[A-Z]+/.test(speech) && speech === speech.toUpperCase() ? 2 : 0;

    setResponse(answers[isQuestion + isYelling]);
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Type your message"
      />
      <button onClick={handleSubmit}>Send</button>
      <p>{response}</p>
    </div>
  );
};

export default Hey;
