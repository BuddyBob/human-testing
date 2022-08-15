import React from 'react';
import { useTimer } from 'react-timer-hook';

export default function ReflexTimer({ expiryTimestamp }) {
    const {
      seconds,
      start,
      pause,
      isRunning,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  
  
    return (
    //   <div style={{textAlign: 'center'}}>
    //     <div style={{fontSize: '100px'}}>
    //       <span>{seconds}</span>
    //     </div>
    //     <p>{isRunning ? 'Running' : 'Not running'}</p>
    //     <button onClick={start}>Start</button>
    //     <button onClick={() => {
    //       // Restarts to 5 minutes timer
    //       const time = new Date();
    //       time.setSeconds(time.getSeconds() + 300);
    //       restart(time)
    //     }}>Restart</button>
    //  </div>
    <div>
        
    </div>
    );
  }