import React from 'react';
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <h1>Welcome to Guesser Game</h1>
      <h2>Are you ready to play?</h2>
      <Link to="/game">
        <button className="start-button">Start Game</button>
      </Link>
    </div>
  )
}

export default App