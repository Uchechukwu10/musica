import React, { useState, useEffect } from 'react';
import ViewChartBanner from '../components/ViewChartBanner';
import ListedSong from '../components/ListedSong';
import allSongs from '../assets/allSongs';
import charts from '../assets/allCharts';
import { useParams } from 'react-router-dom';

const ViewChart = () => {
  const [chartSongs, setChartSongs] = useState([]);
  const [currentChart, setCurrentChart] =useState({});
  const {id} = useParams();
  
  useEffect(() => {
    const current = charts.find((chart) => chart.id == id);
    setCurrentChart(current);
    const currentSongs = allSongs.filter((song) => song.charts.includes(current.title));
    setChartSongs(currentSongs);
  }, [])
  
  return (
    <div className='view-chart py-7'>
      <ViewChartBanner id={id} currentChart={currentChart}/>
      <div className='flex flex-col gap-3 px-5'>
          {chartSongs.map((song, index) => (
            <ListedSong key={index} image={song.image} title={song.title} artiste={song.artiste} />
          ))}
      </div>
    </div>
  )
}

export default ViewChart;