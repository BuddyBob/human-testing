import '../Game.css'
import './Reflex.css'

import React, { useState } from 'react'

export default function Reflex() {
    const [click, setClick] = useState(false)
    const [startGame, setStartGame] = useState(false)
    
    if (!click){
        setTimeout(() => setClick(true)), 1000);
    }
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
                    startGame ? 
                        <>
                            { click ? 
                                <input type="button" className="reflex-button" style={{background: '#48b153', border: '#48b153 solid 2px'}} value="Click!"/> 
                                :  <input type="button" className="reflex-button"  style={{background: '#B04955',border: '#B04955 solid 2px'}} value="Wait..."/>
                            }
                        </>:
                        <input type="button" onClick={()=>setStartGame(true)} className="reflex-button" style={{background: '#75c8e6', border: '#75c8e6 solid 2px'}} value="Start Game"/>
                } 
            </div>
        </div>
    )
}
