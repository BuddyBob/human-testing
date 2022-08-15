import {CanvasJSChart} from 'canvasjs-react-charts'
import React from 'react'

export default function TimesChart(props) {
    //form dataPoints
    let dataPoints = []
    data = localStorage.getItem('games')
    let data_parsed = JSON.parse(data)
    //enumerate through data_parsed.reflex.times and add to dataPoints as dictionary with keys as index and values as time
    for (let i = 0; i < data_parsed.reflex.times.length; i++){
        dataPoints.push({x: i, y: data_parsed.reflex.times[i]})
    }


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
            dataPoints
        }]
    }
  return (
    <div>

    </div>
  )
}
