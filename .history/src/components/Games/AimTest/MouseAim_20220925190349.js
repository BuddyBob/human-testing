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

    async function addData(){
        let games = localStorage.getItem('games')
        let games_parsed = JSON.parse(games)
        await games_parsed.mouse_aim.times.push(time.toFixed(3))

        //get average if last target present
        if (JSON.parse(localStorage.getItem('games')).mouse_aim.times.length == 9){
            console.log('hii')
            let sum = 0
            for (let i = 0; i < games_parsed.mouse_aim.times.length; i++){
                sum += parseFloat(games_parsed.mouse_aim.times[i])
            }
            let avg = sum / games_parsed.mouse_aim.times.length
            games_parsed.mouse_aim.average.push(avg.toFixed(3))
        }
        localStorage.setItem('games', JSON.stringify(games_parsed))
    }
    function removeData(){
        let games = localStorage.getItem('games')
        let games_parsed = JSON.parse(games)
        games_parsed.mouse_aim.times = []
        localStorage.setItem('games', JSON.stringify(games_parsed))
    }

    //wait for elementDimensions to be set
    async function targetClicked(){
        //stop timer if running
        if (timerStarted){
            await addData();
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

        //if 20 items clicked setStart to false , setTimerStarted to false, setTarget to false, setTime to 0
        console.log(localStorage.getItem('games'))
        console.log(JSON.parse(localStorage.getItem('games')).mouse_aim.times.length)
        if (JSON.parse(localStorage.getItem('games')).mouse_aim.times.length === 10){
            console.log("ended?",timerStarted)
            console.log("10 items clicked")
            setStart(false)
            setTimerStarted(false)
            setTime(0)
            console.log(JSON.parse(localStorage.getItem('games')).mouse_aim.times)
            removeData()
        }


    }

    useEffect(() => {
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
                <div className="num-stats">
                    <div className="row">
                        <p>
                            <strong>Best Time:</strong> {_.min(JSON.parse(localStorage.getItem('games')).mouse_aim.average)}
                        </p>
                    </div>
                    <div className="row">
                        <p>
                            <strong>Worst Time:</strong> {_.max(JSON.parse(localStorage.getItem('games')).mouse_aim.average)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MouseAim
