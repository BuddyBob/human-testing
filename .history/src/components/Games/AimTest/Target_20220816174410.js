import './MouseAim.css'

import React from 'react'
import TargetImg from '../../../assets/Target.png'

function Target() {
  return (
    <div>
        <input type="image" onClick={() => console.log("hello")} src={TargetImg} />
    </div>
  )
}

export default Target
