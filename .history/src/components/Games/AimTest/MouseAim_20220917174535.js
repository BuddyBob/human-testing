import './MouseAim.css'
import '../Game.css'

import React, {useEffect, useRef, useState} from 'react'

import TargetImg from '../../../assets/Target.png'
import TimeChart from '../TimeChart'
import _ from "lodash";

function MouseAim() {
    const [start, setStart] = useState(false)
    const [target, setTarget] = useState(false)
    const elementDimensions = useRef()
    const [tleft, setTleft] = useState(0)
    const [ttop, setTtop] = useState(0)
    const [timerStarted, setTimerStarted] = useState(false)
    const [time, setTime] = useState(0)

    let intervalRef = useRef();

    function addData(){
        let games = localStorage.getItem('games')
        let games_parsed = JSON.parse(games)
        games_parsed.reflex.times.push(time.toFixed(3))

        //get average
        let sum = 0
        for (let i = 0; i < games_parsed.mouse_aim.times.length; i++){
            sum += parseFloat(games_parsed.mouse_aim.times[i])
        }
        let average = sum / games_parsed.mouse_aim.times.length
        games_parsed.mouse_aim.average = average.toFixed(3)
        localStorage.setItem('games', JSON.stringify(games_parsed))
    }

    //wait for elementDimensions to be set
    function targetClicked(){
        //stop timer if running
        if (timerStarted){
            console.log(times)
            addData();
            console.log(time)
            clearInterval(intervalRef.current)
            setTime(0)
        }
        setTimerStarted(false)

        //pick new target position
        setTarget(false)
        console.log("Clicked")
        setTleft(_.random(0, elementDimensions.current?.clientWidth-100))
        setTtop(_.random(0, elementDimensions.current?.clientHeight-100))
        setTarget(true)

        //start new timer if timer ended
        setTimerStarted(true)
        intervalRef.current = setInterval(() => {
            setTime((time) => time + .01);
        } , 10);


    }

    useEffect(() => {
        console.log('elementDimensions', elementDimensions.current?.clientHeight)
        console.log("hello")
        setTarget(true)

    } , [elementDimensions])
    return (
        <div>
            <div className="main-container">
                <div className="title-container">
                    <h1 className="game-title">
                        Test your mouse aim
                    </h1>
                    <p className="game-subtitle"> Click em' all!</p>
                </div>
                {
                        start ?

                            <div ref={elementDimensions} className="aim-container">
                                {
                                    target ?
                                            <input 
                                                className="target" 
                                                type="image" 
                                                style={{position: "relative", left:tleft+"px" , top:ttop+"px"}}
                                                onClick={() => targetClicked()} 
                                                src={TargetImg} 
                                                alt="target"
                                            />
                                    :null
                                }
                            </div>

                        :
                            <div className="start-container">
                                <input className="start-button" type="button" value="Start Game" onClick={() => setStart(true)}/>
                            </div>
                }
                <div className="chart-container">
                    <TimeChart  title="Mouse Aim" game="mouse_aim"/>
                </div>
            </div>
        </div>
    )
}

export default MouseAim
