import '../Game.css'
import './Reflex.css'

import React, { useEffect, useRef, useState } from 'react'

export default function Reflex() {
    const [time, setTimer] = useState(0)
    const [click, setClick] = useState(false)
    const [startGame, setStartGame] = useState(false)
    const [timerStarted, setTimerStarted] = useState(false)

    function handleStart(){
        timeInter = setInterval(() => {
            setTimer((time) => time + .01);
            console.log("TIMER STARTED")
          }, 10);
    }

    function handleStop(){
        clearInterval(timeInter);
        timeInter = 0
        setStartGame(false)
        setClick(false)
        setTimerStarted(false)
    }

    useEffect(() => {
        console.log(startGame,click, timerStarted)
    }, [startGame, click, timerStarted])

    // generate wait time then once wait time is up, start timer

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    console.log(startGame)
    if (startGame === true){
        console.log("GAME STARTED?")
        if (!timerStarted){
            sleep(Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000).then(() => {
                setClick(true)
                setTimerStarted(true)
                handleStart();
            })
        }
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
                <div classNae="timer">
                    <p>
                        {console.log(time.toFixed(2))}
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
