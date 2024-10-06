import React, { useState, useEffect } from 'react';
import { mockData } from './data/mockData';
import mockImg from './assets/mockimg.webp';
import PromptInput from './PromptInput';
import './Game.css';

function Game() {
  const [randomPrompt, setRandomPrompt] = useState('');

  useEffect(() => {
    const dataLength = mockData.length;
    const randomIndex = Math.floor(Math.random() * dataLength);
    setRandomPrompt(mockData[randomIndex].prompt);
  }, []);

  const handleGuess = (guess) => {
    // TODO: Implement guess checking logic
    console.log('User guessed:', guess);
  };

  return (
    <div className='game-container'>
      <div className='game-img-container'>
        <img src={mockImg} alt="mock image" className='game-img' />
      </div>
      <div>
        <h3 style={{ textAlign: 'center' }}>{randomPrompt}</h3>
      </div>
      <PromptInput onGuess={handleGuess} />
    </div>
  );
}

export default Game;