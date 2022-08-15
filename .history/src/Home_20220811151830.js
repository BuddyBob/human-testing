import React from 'react'
import arrow1 from './assets/Arrow1.png'
import display_target from './assets/display-target.png'
import vector1 from './assets/Vector1.svg'
export default function Home(){
  return (
    <div className="home">
      <input type="image" src={display_target} alt="target" className="display-target" />
      <h1 className="home-title">
        Human Testing
      </h1>
      <h2 className="home-subtitle">
        Test your skills
      </h2>
      <input onClick={()=>console.log("Print hello")}type="image" src={arrow1} alt="arrow" className="arrow1" />
      <input type="image" src={vector1} alt="vector" className="vector1" />
    </div>
  )
}
