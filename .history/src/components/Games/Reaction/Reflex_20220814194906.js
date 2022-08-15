import '../Game.css'
import './Reflex.css'

import React, { useEffect, useRef, useState } from 'react'

import TimeChart from '../TimeChart'

export default function Reflex() {
    const [time, setTimer] = useState(0)
    const [click, setClick] = useState(false)
    const [startGame, setStartGame] = useState(false)
    const [timerStarted, setTimerStarted] = useState(false)
    const [prevTime, setPrevTime] = useState(0)
    let intervalRef = useRef();

    function addData(){
        let games = localStorage.getItem('games')
        let games_parsed = JSON.parse(games)
        games_parsed.reflex.times.push(time.toFixed(3))

        //get average
        let sum = 0
        for (let i = 0; i < games_parsed.reflex.times.length; i++){
            sum += parseFloat(games_parsed.reflex.times[i])
        }
        let average = sum / games_parsed.reflex.times.length
        games_parsed.reflex.average = average.toFixed(3)
        localStorage.setItem('games', JSON.stringify(games_parsed))
    }


    function handleStart(){
        if (startGame === true){
            intervalRef.current = setInterval(() => {
                setTimer((time) => time + .01);
            }, 10);
        }
    }

    function handleStop(){
        //add new data to localStorage
        addData()

        //reset values
        clearInterval(intervalRef.current);
        setTimerStarted(false)
        setStartGame(false)
        setClick(false)
        setPrevTime(time)
        setTimer(0)

    }

    useEffect(() => {
    }, [timerStarted,startGame, click, time])

    // generate wait time then once wait time is up, start timer
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    //check if game started
    if (startGame === true){
        //check if user is already waiting for wait...
        if (!timerStarted){
            console.log("GAME STARTED?")
            sleep(Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000).then(() => {
                setTimerStarted(true)
                //after wait time, start click! timer and show click! button
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
                    <p className="time">
                        Time: {time.toFixed(3)}   
                    </p>
                    <p className="prev-time">
                        Prev: {prevTime.toFixed(3)}
                    </p>
                </div>


                {/* If the user has started the game, 
                (
                check if the wait timer is over. (calls the handleStop on click)
                If so show the click! button, else show the wait... button 
                )

                If the user has not started the game
                (
                    show the start button
                ) */}

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

                <div className="chart-container">
                    <TimeChart  title="Reflex Times" game="reflex"/>
                </div>
            </div>
        </div>
    )
}
