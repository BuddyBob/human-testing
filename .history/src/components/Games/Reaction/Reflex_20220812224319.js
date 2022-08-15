import '../Game.css'
import './Reflex.css'

import React, { useEffect, useRef, useState } from 'react'

export default function Reflex() {
    const [time, setTimer] = useState(-3)
    const [click, setClick] = useState(false)
    const [startGame, setStartGame] = useState(false)
    const [timerStarted, setTimerStarted] = useState(false)
    let intervalRef = useRef();

    function handleStart(){
        console.log('yolo1')
        intervalRef.current = setInterval(() => {
            setTimer((time) => time + .01);
          }, 10);
    }

    function handleStop(){
        clearInterval(intervalRef.current);
        setStartGame(false)

    }

    // generate wait time then once wait time is up, start timer
    useEffect(async () => {
        if(startGame){
            await new Promise(resolve => setTimeout(setClick(true), Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000));
            if (!timerStarted){
                handleStart();
                setTimerStarted(true)
            }
        }
    } , [])



    return (
        <div>
            <div className="main-container">
                <div className="title-container">
                    <h1 className="game-title">
                        Test Your Reflexes 
                    </h1>
                    <p className="game-subtitle"> Click the button as fast as you can</p>
                </div>
                <div classNae="timer">
                    <p>
                        time: {time.toFixed(2)}
                    </p>
                </div>
                {
                    startGame ? 
                        <>
                            { click ? 
                                <input type="button" onClick={()=>handleStop()} className="reflex-button" style={{background: '#48b153', border: '#48b153 solid 2px'}} value="Click!"/> 
                                :  <input type="button" className="reflex-button"  style={{background: '#B04955',border: '#B04955 solid 2px'}} value="Wait..."/>
                            }
                        </>:
                        <input type="button" onClick={()=>setStartGame(true)} className="reflex-button" style={{background: '#75c8e6', border: '#75c8e6 solid 2px'}} value="Start Game"/>
                } 
            </div>
        </div>
    )
}
