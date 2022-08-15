import './Reflex'

import React from 'react';
import Reflex from './Reflex';
export default function ReflexTimer() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + Math.floor(Math.random() * (4 - 1 + 1)) + 1);
    Reflex(time)
    return (
        <div>
        </div>
    );
  }