import './MouseAim.css'
import '../Game.css'

import React, {useState} from 'react'

function MouseAim() {
    const [start, setStart] = useState(false)

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
                        <div className="aim-container">
                        </div>
                        :
                        <div className="start-container">
                            <button className="start-button" onClick={() => setStart(true)}>
                                Start
                            </button>
                        </div>
                }
            </div>
        </div>
    )
}

export default MouseAim