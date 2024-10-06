import React, { useState } from 'react';
import './Game.css';
function PromptInput({ onGuess }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuess(inputValue);
    setInputValue('');
  };

  return (
    <div className='prompt-input-container'>
    <form onSubmit={handleSubmit} className='flex-column'>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your guess"
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default PromptInput;