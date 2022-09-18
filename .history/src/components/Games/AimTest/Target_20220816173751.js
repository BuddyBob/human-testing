import './MouseAim.css'

import React from 'react'
import TargetImg from '../../../assets/Target.png'

function Target() {
  return (
    <div>
        <input onClick={console.log('hey')} type="button" className="target" src={TargetImg} alt="Target" />
    </div>
  )
}

export default Target
