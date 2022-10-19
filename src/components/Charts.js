import React from 'react';
import ChartCard from './ChartCard';
import charts from '../assets/allCharts';

const Charts = () => {

  return (
    <div className='flex flex-col text-white w-5/12'>
        <h1 className='text-3xl font-bold'>Top Charts</h1>
        <div className='flex flex-col my-4'>
            {charts.map((chart, index) => (
              <ChartCard key={index} img={chart.image} title={chart.title} desc={chart.desc} duration={chart.duration} id={chart.id}/>
            ))}
        </div>
    </div>
  )
}

export default Charts