import {CanvasJSChart} from 'canvasjs-react-charts'
import React from 'react'

export default function TimesChart(props) {
    //form dataPoints
    let dataPoints = []
    let data = localStorage.getItem('games')
    console.log(data)
    let data_parsed = JSON.parse(data)
    if (props.game == "mouse_aim"){
        for (let i = 1; i < data_parsed.mouse_aim.times.length; i++){
            dataPoints.push({x: i, y: parseFloat(data_parsed.mouse_aim.times[i])})
        }
    }
    
    else if (props.game == "reflex"){
        for (let i = 1; i < data_parsed.reflex.times.length; i++){
            dataPoints.push({x: i, y: parseFloat(data_parsed.reflex.times[i])})
        }
    }

    let options = {
        fontFamily: 'DM Sans',
        animationEnabled: true,
        theme: "dark2", 
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
