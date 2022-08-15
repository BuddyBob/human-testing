import { IoArrowDown } from 'react-icons/io5';
import React from 'react'
import display_target from './assets/display-target.png'
import vector1 from './assets/Vector1.png'
export default function Home(){
  return (
    <div>
      <input type="image" src={display_target} alt="target" className="display-target" />
      <h1 className="home-title">
        Human Testing
      </h1>
      <h2 className="home-subtitle">
        Test your skills
      </h2>
      <IoArrowDown className="home-arrow" />
      <input type="image" src={vector1} alt="vector" className="vector1" />
    </div>
  )
}
