import React, { useState, useEffect, useContext } from 'react';
import ViewChartBanner from '../components/ViewChartBanner';
import ListedSong from '../components/ListedSong';
import allSongs from '../assets/allSongs';
import charts from '../assets/allCharts';
import { useParams } from 'react-router-dom';
import { MusicContext } from '../assets/contexts';

const ViewChart = () => {
  const [chartSongs, setChartSongs] = useState([]);
  const [currentChart, setCurrentChart] =useState({});

  const {chartIds, setChartIds, collLikes, setCollLikes} = useContext(MusicContext);
  const {id} = useParams();

  const addToCollection = () => {
      setChartIds(prevValue => [...prevValue, Number(id)]);
  }
  const handleChartLike = () => {
      setCollLikes(prevValue => {
        return {...prevValue, charts: [...prevValue.charts, Number(id)]};
      });
  }
  const handleChartUnlike = () => {
    setCollLikes(prevValue => {
      const chartLikes = prevValue.charts;
      const index = chartLikes.indexOf(Number(id));
      if (index > -1) {
          chartLikes.splice(index, 1);
      }
      
      return {...prevValue, charts: chartLikes};
    });
}
  
  useEffect(() => {
    const current = charts.find((chart) => chart.id == id);
    setCurrentChart(current);
    const currentSongs = allSongs.filter((song) => song.charts.includes(current.title));
    setChartSongs(currentSongs);
  }, [])
  
  return (
    <div className='view-chart py-7'>
      <ViewChartBanner id={id} currentChart={currentChart} addToCollection={addToCollection} handleChartLike={handleChartLike} handleChartUnlike={handleChartUnlike}/>
      <div className='flex flex-col gap-3 px-5'>
          {chartSongs.map((song, index) => (
            <ListedSong key={index} image={song.image} title={song.title} artiste={song.artiste} />
          ))}
      </div>
    </div>
  )
}

export default ViewChart;