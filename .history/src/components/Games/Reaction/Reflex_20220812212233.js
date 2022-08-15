import '../Game.css'
import './Reflex.css'
import { useTimer } from 'react-timer-hook';
import React, { useState } from 'react'

import ReflexTimer from './ReflexTimer'

export default function Reflex({expiryTimestamp}) {
    const {
        seconds,
        start,
        pause,
        isRunning,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    
    <ReflexTimer expiryTimestamp={time} /> &&
    const [click, setClick] = useState(false)
    const [startGame, setStartGame] = useState(false)

    const time = new Date();
    time.setSeconds(time.getSeconds() + Math.floor(Math.random() * (4 - 1 + 1)) + 1);
    

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
