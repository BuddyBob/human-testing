import "./Memory.css"

import React, {useEffect, useRef, useState} from 'react'

export default function Memory(){
  const [start, setStart] = useState(false)
  const [problem, setProblem] = useState(false)
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
                                  <div class="cell" id="dim"></div>
                                  <div class="cell" id="dim"></div>
                                  <div class="cell" id="dim"></div>
                                  <div class="cell" id="dim"></div>
                                  <div class="cell" id="dim"></div>
                                  <div class="cell" id="dim"></div>
                                  <div class="cell" id="dim"></div>
                                  <div class="cell" id="dim"></div>
                                  <div class="cell" id="dim"></div>
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
