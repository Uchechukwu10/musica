import React, { useContext, useEffect, useState } from 'react';
import SongCard from './SongCard';
import allSongs from '../assets/allSongs';
import { newReleases, popular } from '../assets/library';
import { Scrollbar, A11y, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { MusicContext } from '../assets/contexts';

const HomeSongs = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [popSongs, setPopSongs] = useState([]);
  const [newSongs, setNewSongs] = useState([]);

  const { setCurrentLibrary, setSongIndex, setIsPlaying, audioElem} = useContext(MusicContext);
  const playSong = (songId, library) => {
    const selected = library.findIndex(song => song.id===songId);
    setCurrentLibrary(library);
    setSongIndex(selected);
    setIsPlaying(true);
    audioElem.current.currentTime = 0;
}

  const resizeWindow = () => {
    if (screenWidth<768) {
      setScreenWidth(window.innerWidth)
    } else {
      setScreenWidth(window.innerWidth-128)
    }
  }

  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);

    return () => {
      window.removeEventListener('resize', resizeWindow);
    }
  }, [])

  useEffect(() => {
    const pop = [];
    allSongs.map((song) => {
      return popular.includes(song.id) && pop.push(song);
    })
    setPopSongs(pop);
  })

  useEffect(() => {
    const newTracks = [];
    allSongs.map((song) => {
      return newReleases.includes(song.id) && newTracks.push(song);
    })
    setNewSongs(newTracks);
  })

  return (
    <div className='text-white mb-20'>
        <h1 className='text-2xl font-bold pt-8 pb-4'>New Releases</h1>
        <Swiper
            modules={[Scrollbar, A11y, Keyboard]}
            spaceBetween={5}
            slidesPerView={(screenWidth/193)}
            keyboard={{ enabled: true, onlyInViewport: true }}
            scrollbar={{ draggable: true, hide: true, el: '.myScrollBar'}}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
             {newSongs.map((song, index) => {
              return <SwiperSlide><SongCard key={index} img={song.image} title={song.title} artist={song.artiste} id={song.id} library={newSongs} playSong={playSong}/></SwiperSlide>
            })}
        </Swiper>
        <div className='myScrollBar'></div>
        <h1 className='text-2xl font-bold pb-4 pt-8'>Popular in your area</h1>
        <Swiper
            modules={[Scrollbar, A11y, Keyboard]}
            spaceBetween={5}
            slidesPerView={(screenWidth/193)}
            keyboard={{ enabled: true, onlyInViewport: true }}
            scrollbar={{ draggable: true, hide: true, el: '.myScrollBar'}}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
            {popSongs.map((song, index) => {
              return <SwiperSlide><SongCard key={index} img={song.image} title={song.title} artist={song.artiste} id={song.id} library={popSongs} playSong={playSong}/></SwiperSlide>
            })}
        </Swiper>
        <div className='myScrollBar'></div>
    </div>
  )
}

export default HomeSongs