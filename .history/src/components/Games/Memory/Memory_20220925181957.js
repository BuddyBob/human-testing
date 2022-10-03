import "./Memory.css"

import React, {useEffect, useRef, useState} from 'react'

import _ from "lodash";

export default function Memory(){
  const [start, setStart] = useState(false)
  const [problem, setProblem] = useState(false)
  const [level, setLevel] = useState(10)
  const [problemSet, setProblemSet] = useState([])
  const [guessSet, setGuessSet] = useState([])

  async function dim(i){
    document.getElementsByClassName("cell"+problemSet[i])[0].classList.add('dim')
    document.getElementsByClassName("cell"+problemSet[i])[0].classList.remove('light')
  }

  async function lightUp(){
    //light up cells according to problemSet
    console.log(problemSet)
    //iterate through problemSet and change the according cell's id to light
    await new Promise(resolve => setTimeout(resolve, 500));
    for (let i = 0; i < problemSet.length; i++){

      //change id of cell1 but wait for HTML to load
      document.getElementsByClassName("cell"+problemSet[i])[0].classList.remove('dim')
      document.getElementsByClassName("cell"+problemSet[i])[0].classList.add('light')
      await new Promise(resolve => setTimeout(resolve, 700));
      await dim(i)
    }
    setProblem(false)
  }

  

  if (problem){
    //generate cell positions for problem
    for (let i = 0; i < level; i++) {
      setProblemSet(problemSet.push(_.random(1, 9)))
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
                                  <div onClick={()=>cellClick(1)} className="cell1 dim"></div>
                                  <div onClick={()=>cellClick(2)} className="cell2 dim"></div>
                                  <div onClick={()=>cellClick(3)} className="cell3 dim"></div>
                                  <div onClick={()=>cellClick(4)} className="cell4 dim"></div>
                                  <div onClick={()=>cellClick(5)} className="cell5 dim"></div>
                                  <div onClick={()=>cellClick(6)} className="cell6 dim"></div>
                                  <div onClick={()=>cellClick(7)} className="cell7 dim"></div>
                                  <div onClick={()=>cellClick(8)} className="cell8 dim"></div>
                                  <div onClick={()=>cellClick(9)} className="cell9 dim"></div>
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