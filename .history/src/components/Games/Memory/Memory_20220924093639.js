import React from 'react'
export default function Memory(){
  return (
    <div>
            <div className="main-container">
                <div className="title-container">
                    <h1 className="game-title">
                        Do you have an Elephants Memory?
                    </h1>
                    <p className="game-subtitle"> Give it a shot! </p>
                </div>

                {
                        start ?

                            <div ref={elementDimensions} className="aim-container">

                            </div>

                        :
                            <div className="start-container">
                                <input className="start-button" type="button" value="Start Game" onClick={() => setStart(true)}/>
                            </div>
                }
          </div>
    </div>
  )
}
