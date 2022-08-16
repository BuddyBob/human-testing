import React from 'react'
import TargetImg from '../../../assets/Target.png'

function Target() {
  return (
    <div>
        <input type="image" className="target" src={TargetImg} alt="Target" />
    </div>
  )
}

export default Target