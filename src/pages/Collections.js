import React, { useState, useEffect } from 'react';
import CollectionCard from '../components/CollectionCard';
import {library, allCollections, myCharts} from '../assets/library';
import allSongs from '../assets/allSongs';
import charts from '../assets/allCharts';
import ListedSong from '../components/ListedSong';

const Collections = () => {
  const [activeCollection, setActiveCollection] = useState('Library');
  const [librarySongs, setLibrarySongs] = useState([]);
  const [addedCharts, setAddedCharts] = useState([]);
  const [collectionsAll, setCollectionsAll] = useState([]);

  const handleCollection = (collection) => {
    setActiveCollection(collection);
  }

  const listLibraries = () => {
    if (activeCollection == 'Library') {
      return (
        <div className='flex flex-col gap-3 px-5'>
              {librarySongs.map((song, index) => {
                return <ListedSong key={index} image={song.image} title={song.title} artiste={song.artiste} />;
              })}
        </div>
      )
    } else if (activeCollection == 'Charts') {
        return (
          <div className='flex gap-5 flex-wrap'>
              <CollectionCard />
              <CollectionCard />
              <CollectionCard />
              <CollectionCard />
              <CollectionCard />
              <CollectionCard />
              <CollectionCard />
          </div>
        )
    }
  }

  useEffect(() => {
    let librarySongs = [];
    allSongs.map((song) => {
        library.includes(song.id) && librarySongs.push(song);
    });
    setLibrarySongs(librarySongs);
  }, []);

  useEffect(() => {
    let displayCharts = [];
    charts.map((chart) => {
        myCharts.includes(chart.id) && displayCharts.push(chart);
    });
    setAddedCharts(displayCharts);
  }, []);

  useEffect(() => {
    setCollectionsAll(allCollections);  
  }, [])
  


  return (
    <div>
        <div className='flex py-3 px-3 my-3'>
        {collectionsAll.map((collection) => {
          return <span className={activeCollection == collection ? 'collection-active px-4 py-2 text-lg mx-2 cursor-pointer' : 'collection-title px-4 py-2 text-lg mx-2 cursor-pointer'}  onClick={() => handleCollection(collection)}>{collection}</span>
        })}
        </div>
        <div>
          {listLibraries()}
        </div>
    </div>
  )
}

export default Collections