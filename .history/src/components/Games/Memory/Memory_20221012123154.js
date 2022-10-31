import "./Memory.css"

import React, {useEffect, useRef, useState} from 'react'

import _ from "lodash";

export default function Memory(){
  const [start, setStart] = useState(false)
  const [problem, setProblem] = useState(false)
  const [level, setLevel] = useState(5)
  const [problemSet, setProblemSet] = useState([])
  const [guessSet, setGuessSet] = useState([])

  async function dim(i){
    document.getElementsByClassName("cell"+problemSet[i])[0].classList.add('dim')
    document.getElementsByClassName("cell"+problemSet[i])[0].classList.remove('light')
  }

  async function lightUp(){
    console.log("problemSet",problemSet)
    await new Promise(resolve => setTimeout(resolve, 500));

    //iterate through problem set and light up according cells
    console.log("problmeSet length",problemSet.length)
    for (let i = 0; i < problemSet.length; i++){
      document.getElementsByClassName("cell"+problemSet[i])[0].classList.remove('dim')
      document.getElementsByClassName("cell"+problemSet[i])[0].classList.add('light')

      //wait for cells to light up then dim them
      await new Promise(resolve => setTimeout(resolve, 800));
      await dim(i)
    }
    setProblem(false)
  }

  function CellClick(c){
    //add cell to guessSet and wait for it to add
    setGuessSet([...guessSet, c])
  }

  useEffect(function(){
    console.log("guessSet",guessSet)
  },[guessSet])
  //generate unique cell positions for problem
  if (problem){
    let newProblemSet = []
    for (let i = 0; i < level; i++){
      let randomCell = Math.floor(Math.random() * 9) + 1
      if (newProblemSet.includes(randomCell)){
        i--
      } else {
        newProblemSet.push(randomCell)
      }
    }
    for (let i = 0; i < newProblemSet.length; i++){
      setProblemSet(problemSet.push(newProblemSet[i]))
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
                                  <div onClick={()=>CellClick(1)} className="cell1 dim"></div>
                                  <div onClick={()=>CellClick(2)} className="cell2 dim"></div>
                                  <div onClick={()=>CellClick(3)} className="cell3 dim"></div>
                                  <div onClick={()=>CellClick(4)} className="cell4 dim"></div>
                                  <div onClick={()=>CellClick(5)} className="cell5 dim"></div>
                                  <div onClick={()=>CellClick(6)} className="cell6 dim"></div>
                                  <div onClick={()=>CellClick(7)} className="cell7 dim"></div>
                                  <div onClick={()=>CellClick(8)} className="cell8 dim"></div>
                                  <div onClick={()=>CellClick(9)} className="cell9 dim"></div>
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
