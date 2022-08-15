import '../Game.css'
import './Reflex.css'

import React, { useState } from 'react'

export default function Reflex() {
    const [click, setClick] = useState(true)
    return (
        <div>
            <div className="main-container">
                <div className="title-container">
                    <h1 className="game-title">
                        Test Your Reflexes 
                    </h1>
                    <p className="game-subtitle"> Click the button as fast as you can</p>
                </div>
                    <input type="button" className="reflex-button" id={click ? true : "click_false"} value={click ? "Click!" : "Wait..."}/>
            </div>
        </div>
    )
}
