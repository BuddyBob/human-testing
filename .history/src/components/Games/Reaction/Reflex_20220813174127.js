import '../Game.css'
import './Reflex.css'

import React, { useEffect, useRef, useState } from 'react'

export default function Reflex() {
    const [time, setTimer] = useState(0)
    const [click, setClick] = useState(false)
    const [startGame, setStartGame] = useState(false)
    const [timerStarted, setTimerStarted] = useState(false)
    const [prevTime, setPrevTime] = useState(0)
    let intervalRef = useRef();

    function handleStart(){
        console.log("handleStart called", startGame,click, timerStarted)
        if (startGame === true){
            intervalRef.current = setInterval(() => {
                setTimer((time) => time + .01);
            }, 10);
        }
    }

    function handleStop(){
        console.log("handleStop called", startGame,click, timerStarted)
        clearInterval(intervalRef.current);
        setTimerStarted(false)
        setStartGame(false)
        setClick(false)
        setPrevTime(time)
        setTimer(0)
    }

    useEffect(() => {
        console.log("handleStop closed", startGame,click, timerStarted, time)
    }, [timerStarted,startGame, click, time])

    // generate wait time then once wait time is up, start timer

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    if (startGame === true){
        if (!timerStarted){
            console.log("GAME STARTED?")
            sleep(Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000).then(() => {
                setTimerStarted(true)
                setClick(true)
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
                <div className="timer-container">
                    <p className="timer">
                        {console.log(time.toFixed(3))}
                        Time: {time.toFixed(3)}   
                            Prev: {time.toFixed(3)}
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
