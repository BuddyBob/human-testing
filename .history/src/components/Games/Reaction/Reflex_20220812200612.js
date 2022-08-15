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
                        click ? <input type="button" className="reflex-button" style={{background: '#48b153'}} value="Click!"/> 
                        : <input type="button" className="reflex-button"  styles={{backgroundColor: '#B14855'}} value="Wait..."/>

                    }
            </div>
        </div>
    )
}
