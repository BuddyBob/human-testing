import "./Memory.css"

import React, {useEffect, useRef, useState} from 'react'

import _ from "lodash";

export default function Memory(){
  const [start, setStart] = useState(false)
  const [problem, setProblem] = useState(false)
  const [level, setLevel] = useState(1)
  const [problemSet, setProblemSet] = useState([])

  function lightUp(){
    //light up cells according to problemSet
    console.log(problemSet)
    //iterate through problemSet and change the according cell's id to light
    for (let i = 0; i < problemSet.length; i++){
      //change id of cell1 but wait for document to load
      setTimeout(function(){
        document.getElementById(problemSet[i]).id = "light"
      }, 10000 * i)
    }
  }

  if (problem){
    //generate cell positions for problem
    for (let i = 0; i < level; i++) {
      setProblemSet(problemSet.push(_.random(0, 9)))
    }
    setProblem(false)
    lightUp()
  }

  return (
    <div>
            <div className="main-container">
                <div className="title-container">
                    <h1 className="game-title">
                        Test Your Memory!
                    </h1>
                    <p className="game-subtitle"> Are you an Elephant? </p>
                </div>

                {
                        start ?

                            <div className="memory-container">
                                <div class="grid">
                                  <div className="cell1" id="dim"></div>
                                  <div className="cell2" id="dim"></div>
                                  <div className="cell3" id="dim"></div>
                                  <div className="cell4" id="dim"></div>
                                  <div className="cell5" id="dim"></div>
                                  <div className="cell6" id="dim"></div>
                                  <div className="cell7" id="dim"></div>
                                  <div className="cell8" id="dim"></div>
                                  <div className="cell9" id="dim"></div>
                                </div>
                            </div>

                        :
                            <div className="start-container">
                                <input className="start-button" type="button" value="Start Game" onClick={() => {setStart(true); setProblem(true)}}/>
                            </div>
                }
          </div>
    </div>
  )
}
