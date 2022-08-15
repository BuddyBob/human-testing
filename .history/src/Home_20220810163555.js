import React from 'react'
import display_target from './assets/xx.png'
export default function Home(){
  return (
    <div>
      <h1 className="home-title">
        Human Testing
      </h1>
      <h2 className="home-subtitle">
        Test your skills
      </h2>
      <input type="img" src={display_target} alt="target" className="display-target" />
    </div>
  )
}
