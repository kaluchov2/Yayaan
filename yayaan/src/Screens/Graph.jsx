import React from 'react'
import AnyChart from 'anychart-react' 
import './graph.scss'
function Graph(){
    const complexSettings = {
        width: 800,
        height: 600,
        credits: false,
        type: 'column',
        data: "Lunes,5\nMartes,7\nMiercoles,6\nJueves,7\nViernes,6\nSabado,6\nDomingo,5",
        title: 'Dias de la semana',
        yAxis: [1, {
          orientation: 'right',
          enabled: true,
          labels: {
            format: '{%Value}{decimalPoint:\\,}',
            fontColor: 'red'
          }
        }],
        
        lineMarker: {
          value: 8
        }
      };

    return(
        <>
        <div className='graph'>
        <AnyChart {...complexSettings}/>
        <div className='boton bg-rose-600'><button className='btn-bt bg-rose-600'>Regresar al inicio</button></div>
        </div>
   
        
        </>
    )
}
export default Graph;