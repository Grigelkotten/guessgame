import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <h2>Guesser Game</h2>
      <Link to="/game">
        <button>Start Game</button>
      </Link>
    </div>
  )
}

export default App
