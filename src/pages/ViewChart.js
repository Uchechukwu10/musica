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

  const {chartIds, setChartIds, newCollections, setNewCollections} = useContext(MusicContext);
  const {id} = useParams();

  const addToCollection = () => {
      setChartIds(prevValue => [...prevValue, Number(id)]);
  }
  
  useEffect(() => {
    const current = charts.find((chart) => chart.id == id);
    setCurrentChart(current);
    const currentSongs = allSongs.filter((song) => song.charts.includes(current.title));
    setChartSongs(currentSongs);
  }, [])
  
  return (
    <div className='view-chart py-7'>
      <ViewChartBanner id={id} currentChart={currentChart} addToCollection={addToCollection}/>
      <div className='flex flex-col gap-3 px-5'>
          {chartSongs.map((song, index) => (
            <ListedSong key={index} image={song.image} title={song.title} artiste={song.artiste} />
          ))}
      </div>
    </div>
  )
}

export default ViewChart;