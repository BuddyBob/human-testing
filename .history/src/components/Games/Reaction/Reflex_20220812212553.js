import '../Game.css'
import './Reflex.css'

import React, { useState } from 'react'

import { useTimer } from 'react-timer-hook';

export default function Reflex({expiryTimestamp}) {
    const {
        seconds,
        start,
        pause,
        isRunning,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    
    const [click, setClick] = useState(false)
    const [startGame, setStartGame] = useState(false)
    

    return (
        <div>
            {console.log(isRunning)}
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