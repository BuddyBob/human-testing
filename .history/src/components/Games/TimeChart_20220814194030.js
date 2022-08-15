import {CanvasJSChart} from 'canvasjs-react-charts'
import React from 'react'

export default function TimesChart(props) {
    //form dataPoints
    let dataPoints = []
    let data = localStorage.getItem('games')
    let data_parsed = JSON.parse(data)
    for (let i = 1; i < data_parsed.reflex.times.length; i++){
        dataPoints.push({x: i, y: parseInt(data_parsed.reflex.times[i],10)})
    }
    console.log(dataPoints)

    let options = {
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
            dataPoints
        }]
    }
  return (
    <div>
        <CanvasJSChart options = {options} />
    </div>
  )
}
