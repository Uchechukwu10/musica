import React from 'react';
import ChartCard from './ChartCard';
import chart1 from '../images/chart1.png';
import chart2 from '../images/chart2.png';
import chart3 from '../images/chart3.png';

const Charts = () => {
  return (
    <div className='flex flex-col text-white w-5/12'>
        <h1 className='text-3xl font-bold'>Top Charts</h1>
        <div className='flex flex-col my-4'>
            <ChartCard img={chart1} title={'Golden age of 80s'} artist={'Sean swadder'} duration={'2:34:45'}/>
            <ChartCard img={chart1} title={'Golden age of 80s'} artist={'Sean swadder'} duration={'2:34:45'}/>
            <ChartCard img={chart1} title={'Golden age of 80s'} artist={'Sean swadder'} duration={'2:34:45'}/>
        </div>
    </div>
  )
}

export default Charts