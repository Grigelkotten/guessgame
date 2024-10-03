import React, { useState, useEffect } from 'react';
import { mockData } from './data/mockData';

function Game() {
  const [randomPrompt, setRandomPrompt] = useState('');

  useEffect(() => {
    const dataLength = mockData.length;
    const randomIndex = Math.floor(Math.random() * dataLength);
    setRandomPrompt(mockData[randomIndex].prompt);
  }, []);

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>{randomPrompt}</h3>
    </div>
  );
}

export default Game;