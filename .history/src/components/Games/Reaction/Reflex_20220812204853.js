import '../Game.css'
import './Reflex.css'

import React, { useState } from 'react'

import ReflexTimer from './ReflexTimer'

export default function Reflex() {
    const [click, setClick] = useState(false)
    const [startGame, setStartGame] = useState(true)

    const time = new Date();
    time.setSeconds(time.getSeconds() + 600);

    return (
        <div>
            <ReflexTimer expiryTimestamp={time} />
            <div className="main-container">
                <div className="title-container">
                    <h1 className="game-title">
                        Test Your Reflexes 
                    </h1>
                    <p className="game-subtitle"> Click the button as fast as you can</p>
                </div>
                {startGame && <input type="button" className="reflex-button" style={{background: '#92DCE5', border: '#92DCE5 solid 2px'}} value="Start Game"/>}
            </div>
        </div>
    )
}
