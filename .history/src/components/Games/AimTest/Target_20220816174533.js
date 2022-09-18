import './MouseAim.css'

import React from 'react'

function Target() {
  return (
    <div>
        <input type="image" onClick={() => console.log("hello")} src={TargetImg} />
    </div>
  )
}

export default Target
