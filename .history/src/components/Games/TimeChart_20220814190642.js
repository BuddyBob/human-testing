import {CanvasJSChart} from 'canvasjs-react-charts'
import React from 'react'

export default function TimesChart(props) {
    const options = {
        animationEnabled: true,
        theme: "dark1", 
        title:{
            text: props.title
        },
        axisY: {
            title: "Times",
            suffix: "sec"
        },
        axisX: {
            title: "Attempt",
            prefix: "#",
            interval: 1
        },
        data: [{
            type: "line",
            toolTipContent: "Week {x}: {y}%",
            dataPoints: [

            ]
        }]
    }
  return (
    <div>

    </div>
  )
}
