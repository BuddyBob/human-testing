import Arrow1 from './assets/Arrow1.png'
import Display_target from './assets/display-target.png'
import React from 'react'
import SetLocalStorage from './components/SetLocalStorageDir/SetLocalStorage';
import Vector1 from './assets/Vector1.svg'
import { useNavigate } from 'react-router-dom';

export default function Home(){

  
  const navigate = useNavigate();
  SetLocalStorage();
  console.log(localStorage.getItem('games'))
  return (
    <div>
      <input type="image" src={Display_target} alt="target" className="display-target" />
      <div className="main-container">
        <h1 className="home-title">
          Human Testing
        </h1>
        <h2 className="subtitle">
          Test your skills
        </h2>
        <input onClick={()=>navigate('/dashboard')} type="image" src={Arrow1} alt="arrow" className="arrow1 bounce" />
        <input type="image" src={Vector1} alt="vector" className="vector1" />
      </div>
    </div>
  )
}
