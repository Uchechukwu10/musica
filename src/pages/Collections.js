import React, { useState, useEffect, useContext } from 'react';
import CollectionCard from '../components/CollectionCard';
import { allCollections } from '../assets/library';
import allSongs from '../assets/allSongs';
import charts from '../assets/allCharts';
import ListedSong from '../components/ListedSong';
import { MusicContext } from '../assets/contexts';

const Collections = () => {
  const [activeCollection, setActiveCollection] = useState('Library');
  const [librarySongs, setLibrarySongs] = useState([]);
  const [addedCharts, setAddedCharts] = useState([]);
  const [collectionsAll, setCollectionsAll] = useState([]);
  const [newCollections, setNewCollections] = useState([{name: 'Likes', charts: [], songs: []}]);

  const { chartIds, collLikes, libraryIds, setIsPlaying, setSongIndex, setCurrentLibrary, audioElem } = useContext(MusicContext);

  const handleCollection = (collection) => {
    setActiveCollection(collection);
  }

  const playSong = (songId) => {
      const selected = librarySongs.findIndex(song => song.id===songId);
      setCurrentLibrary(librarySongs);
      setSongIndex(selected);
      setIsPlaying(true);
      audioElem.current.currentTime = 0;
  }

  const listLibraries = () => {
    if (activeCollection === 'Library') {
      return (
        <div className='flex flex-col gap-3 px-5'>
              {librarySongs.map((song, index) => {
                return <ListedSong key={index} id={song.id} image={song.image} title={song.title} artiste={song.artiste} playSong={playSong}/>;
              })}
        </div>
      )
    } else if (activeCollection === 'Charts') {
        return (
          <div className='flex gap-5 flex-wrap'>
              {addedCharts.map((chart, index) => {
                return <CollectionCard key={index} id={chart.id} image={chart.image} title={chart.title} desc={chart.desc} />;
              })}
          </div>
        )
    } else {
      const currentColl = newCollections.find(coll => coll.name === activeCollection);
      return (
        <div >
            <div className='pb-3'>
              <span className='text-white text-xl ml-3 mb-3'>Charts</span>
              <div className='flex gap-5 flex-wrap'>
                  {currentColl.charts.map((chart, index) => {
                    return <CollectionCard key={index} id={chart.id} image={chart.image} title={chart.title} desc={chart.desc}/>
                  })}
              </div>
            </div>
            <div className='pt-4'>
              <span className='text-white text-xl ml-3'>Songs</span>
              <div className='flex flex-col gap-3 px-2 mb-4 md:px-5'>
                  {currentColl.songs.map((song, index) => {
                    return <ListedSong key={index} image={song.image} title={song.title} artiste={song.artiste} />;
                  })}
              </div>
            </div>
        </div>
      )
    }
  }

  useEffect(() => {
    let librarySongs = [];
    allSongs.map((song) => {
       return libraryIds.includes(song.id) && librarySongs.push(song);
    });
    setLibrarySongs(librarySongs);
  }, [libraryIds]);

  useEffect(() => {
    let displayCharts = [];
    charts.map((chart) => {
        return chartIds.includes(chart.id) && displayCharts.push(chart);
    });
    setAddedCharts(displayCharts);
  }, [chartIds]);

  useEffect(() => {
    let displayLikesCharts = [];
    let displayLikesSongs = [];
    charts.map((chart) => {
       return collLikes.charts.includes(chart.id) && displayLikesCharts.push(chart);
    });
    allSongs.map((song) => {
        return collLikes.songs.includes(song.id) && displayLikesSongs.push(song);
    });
    setNewCollections([{name: 'Likes', charts: displayLikesCharts, songs: displayLikesSongs}]);
  }, [collLikes])

  useEffect(() => {
    setCollectionsAll(allCollections);
    document.body.style.background = `#1D2123`;
    document.body.style.backgroundSize = '1440px auto'; 
  }, [])
  


  return (
    <div>
        <div className='flex py-3 px-3 my-3'>
          {collectionsAll.map((collection, index) => {
            return <span key={index} className={activeCollection === collection ? 'collection-active px-4 py-2 text-lg mx-2 cursor-pointer' : 'collection-title px-4 py-2 text-lg mx-2 cursor-pointer'}  onClick={() => handleCollection(collection)}>{collection}</span>
          })}
          </div>
          <div>
            {listLibraries()}
          </div>
    </div>
  )
}

export default Collections