import '../Game.css'
import './Reflex.css'

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
                <input type="button" className="reflex-button" text="Wait"/>
        </div>
    </div>
  )
}