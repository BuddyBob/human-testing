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
                    {
                        click ? <input type="button" className="reflex-button" styles={{backgroundColor: '#48b153'}} value="Click!"/> 
                        : <input type="button" className="reflex-button" id={click ? "click_true" : "click_false"} value={click ? "Click!" : "Wait..."}/>

                    }
            </div>
        </div>
    )
}
