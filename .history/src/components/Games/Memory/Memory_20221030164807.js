import "./Memory.css"

import React, {useEffect, useRef, useState} from 'react'

import _ from "lodash";

export default function Memory(){
  const [start, setStart] = useState(false)
  const [problem, setProblem] = useState(false)
  const [level, setLevel] = useState(3)
  const [problemSet, setProblemSet] = useState([])
  const [guessSet, setGuessSet] = useState([])

  function dim(i){
    document.getElementsByClassName("cell"+problemSet[i])[0].classList.add('dim')
    document.getElementsByClassName("cell"+problemSet[i])[0].classList.remove('light')
  }

  async function lightUp(){
    // wait for 5 seconds
    await new Promise(r => setTimeout(r, 5000));
    cellClick(20)
    console.log("problemSet",problemSet)

    //iterate through problem set and light up according cells
    for (let i = 0; i < problemSet.length; i++){
      document.getElementsByClassName("cell"+problemSet[i])[0].classList.remove('dim')
      document.getElementsByClassName("cell"+problemSet[i])[0].classList.add('light')
      console.log("lightup NOW", problemSet)
      //wait for cells to light up then dim them
      await new Promise(resolve => setTimeout(resolve, 800));
      dim(i)
    }
    setProblem(false)
    console.log(problemSet)
  }


  function cellClick(c){
    console.log(problemSet)
  }

  if(problem) {
    useEffect(() => {
        const newProblemSet = []
        for (let i = 0; i < level; i++) {
          setProblemSet(prevProblemSet => {
            // Object.assign would also work
            return [...prevProblemSet, Math.floor(Math.random() * 9)];
          });
        }

    }, [problemSet]);

    useEffect(() => {
      setProblem(false)
      lightUp()
    }, [problemSet]);
  } 
  //generate unique cell positions for problem
  
  

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
