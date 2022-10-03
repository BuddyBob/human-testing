import "./Memory.css"

import React, {useEffect, useRef, useState} from 'react'

export default function Memory(){
  const [start, setStart] = useState(false)
  const [problem, setProblem] = useState(false)

  if (problem){

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
