import './Dash.css'

import Bolt from '../../assets/Bolt.png'
import Brain from '../../assets/Brain.png'
import Bullseye from '../../assets/Bullseye.png'
import React from 'react'

export default function Dash() {
  return (
    <div className="main-container">
        <div className="title-container">
            <h1 className="dash-title">
                Dashboard
            </h1>
        </div>
        <div className="card-container">

                <div className="card">
                    <div className="card-contents">
                        <p className="card-title">
                            Reaction Time
                        </p>
                        <input type="image" src={Bolt} alt="Bolt" className="card-icon" />
                        <p className="card-text">
                            Test your reflexes
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-contents">
                        <p className="card-title">
                            Mouse Aim
                        </p>
                        <input type="image" src={Bullseye} alt="Bullseye" className="card-icon" />
                        <p className="card-text">
                            Click them all!
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-contents">
                        <p className="card-title">
                            Sequences
                        </p>
                        <input type="image" src={Brain} alt="Brain" className="card-icon" />
                        <p className="card-text">
                            Put your memory <br/> to the test
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}