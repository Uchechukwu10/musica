import React, { useEffect, useRef, useState } from 'react';
import { Slider } from '@mui/material';
import { songs } from '../sounds';
import song1 from '../images/song1.png';
import {BsShuffle, BsPlayCircleFill, BsSkipStartFill, BsSkipEndFill, BsFillPauseCircleFill, BsFillVolumeDownFill} from 'react-icons/bs';
import {RiRepeatOneLine} from 'react-icons/ri';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const PlayingBar = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [library, setLibrary] = useState(songs);
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const audioElem = useRef();

    const theme = createTheme({
        palette: {
          primary: {
            main: '#FACD66',
          },
          secondary: {
            main: '#11cb5f',
          },
        },
      });

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

    const handleVolume = (e) => {
      console.log(e.target.value);
    }

    useEffect(() => {
        isPlaying ? audioElem.current.play() : audioElem.current.pause()
    }, [isPlaying])

  return (
    <div className='text-white pt-4 pb-1 px-7 play-bar w-full z-40 flex'>
        <div className='flex w-2/12 justify-center items-center'>
            <img className='w-16 h-16 rounded-xl mx-2' src={song1} alt='song'/>
            <div className='mx-2'>
                <h1 className='text-white text-2xl'>{currentSong.title}</h1>
                <h1 className='text-base opacity-50'>{currentSong.artist}</h1>
            </div>
        </div>
        <div className='w-8/12'>
            <audio autoPlay src={songs[0].url} ref={audioElem} onTimeUpdate={onPlaying}/>
            <div className='flex gap-10 justify-center items-center mt-2 mb-5'>
                <span><BsShuffle fontSize='1.1rem' color='#FFFFFF'/></span>
                <span><BsSkipStartFill fontSize='1.2rem' color='#FFFFFF'/></span>
                <span onClick={playPause} className='play-button flex justify-center'>{isPlaying ? <BsFillPauseCircleFill fontSize='2rem' color='#FACD66'/> : <BsPlayCircleFill fontSize='2rem' color='#FACD66'/>}</span>
                <span><BsSkipEndFill fontSize='1.2rem' color='#FFFFFF'/></span>
                <span><RiRepeatOneLine fontSize='1.2rem' color='#FFFFFF'/></span>
            </div>
            <ThemeProvider theme={theme}>
                <span className='mx-3'><Slider onChange={handleChange} value={currentSong.progress} aria-label="Default" valueLabelDisplay="auto" color='primary'/></span>
            </ThemeProvider>
        </div>
        <div className='flex gap-2 w-2/12 justify-center items-center'>
            <span className='ml-6 mr-3'><BsFillVolumeDownFill fontSize='1.7rem'/></span>
            <ThemeProvider theme={theme}>
                <Slider 
                  sx={{
                      '& .MuiSlider-thumb': {
                          borderRadius: '50%',
                          width: '10px',
                          height: '10px',
                        },
                        '& .MuiSlider-rail': {
                          height: '3px',
                        },
                      }}
                  onChange={handleVolume}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  color='primary'
                  />
            </ThemeProvider>
        </div>
    </div>
  )
}

export default PlayingBar;