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

  const { setChartIds, setCollLikes, setCurrentLibrary, setIsPlaying, setSongIndex} = useContext(MusicContext);
  const {id} = useParams();

  const playSong = (songId) => {
    const queue = allSongs.filter(song => song.charts.includes(currentChart.title));
    const selected = queue.findIndex(song => song.id===songId);
    setCurrentLibrary(queue);
    setSongIndex(selected);
    setIsPlaying(true);
  }

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
  const playAllChart = () => {
    const queue = allSongs.filter(song => song.charts.includes(currentChart.title));
    setCurrentLibrary(queue);
    setSongIndex(0);
    setIsPlaying(true);
  }
  
  useEffect(() => {
    const current = charts.find((chart) => chart.id === Number(id));
    setCurrentChart(current);
    const currentSongs = allSongs.filter((song) => song.charts.includes(current.title));
    setChartSongs(currentSongs);
  }, [id])
  
  return (
    <div className='view-chart py-7'>
      <ViewChartBanner id={id} currentChart={currentChart} addToCollection={addToCollection} handleChartLike={handleChartLike} handleChartUnlike={handleChartUnlike} playAllChart={playAllChart}/>
      <div className='flex flex-col gap-3 px-5'>
          {chartSongs.map((song, index) => (
            <ListedSong key={index} id={song.id} image={song.image} title={song.title} artiste={song.artiste} playSong={playSong}/>
          ))}
      </div>
    </div>
  )
}

export default ViewChart;