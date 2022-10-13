import React, { useEffect, useRef, useState } from 'react';
import { Slider } from '@mui/material';
import { songs } from '../sounds';

const PlayingBar = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [library, setLibrary] = useState(songs);
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const audioElem = useRef();

    function playPause() {
        setIsPlaying(!isPlaying);
    }

    const onPlaying = () => {
        const duration = audioElem.current.duration;
        const currentTime = audioElem.current.currentTime;

        setCurrentSong({...currentSong, 'progress': (currentTime/duration) * 100, "length": duration});
    }

    const handleChange = (e) => {
        const newProgress = e.target.value;
        audioElem.current.currentTime = (newProgress/100) * currentSong.length;
    }

    useEffect(() => {
        isPlaying ? audioElem.current.play() : audioElem.current.pause()
    }, [isPlaying])

  return (
    <div className='text-white h-64'>
        <audio autoPlay src={songs[0].url} ref={audioElem} onTimeUpdate={onPlaying}/>
        <div className='text-4xl' onClick={playPause}>Play/Pause</div>
        <div>Title: {currentSong.title}</div>
        <div>Artiste: {currentSong.artist}</div>
        <Slider onChange={handleChange} value={currentSong.progress} aria-label="Default" valueLabelDisplay="auto" />
    </div>
  )
}

export default PlayingBar;