import "./Memory.css"

import React, {useEffect, useRef, useState} from 'react'

import _ from "lodash";

export default function Memory(){
  const [start, setStart] = useState(false)
  const [problem, setProblem] = useState(false)
  const [level, setLevel] = useState(1)
  const [problemSet, setProblemSet] = useState([])
  if (problem){
    //generate cell positions for problem
    for (let i = 0; i < level; i++) {
      problemSet => [...problemSet, _.random(0, 9)]
      console.log(problemSet)
    }
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
                                  <div class="cell1" id="dim"></div>
                                  <div class="cell2" id="dim"></div>
                                  <div class="cell3" id="dim"></div>
                                  <div class="cell4" id="dim"></div>
                                  <div class="cell5" id="dim"></div>
                                  <div class="cell6" id="dim"></div>
                                  <div class="cell7" id="dim"></div>
                                  <div class="cell8" id="dim"></div>
                                  <div class="cell9" id="dim"></div>
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
