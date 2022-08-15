import '../Game.css'

import React from 'react'

export default function Reflex() {
  return (
    <div>
        <div className="main-container">
            <div className="title-container">
                <h1 className="game-title">
                    Test Your Reflexes 
                </h1>
                <p className="game-subtitle"> Click the button as fast as you can</p>
            </div>
            <div className="game-container">
                <button className="game-button">
                    Click Me
                </button>
            </div>
        </div>
    </div>
  )
}
