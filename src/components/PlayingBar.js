import React, { useEffect, useRef, useState, useContext } from 'react';
import { Slider } from '@mui/material';
import allSongs from '../assets/allSongs';
import {BsShuffle, BsPlayCircleFill, BsSkipStartFill, BsSkipEndFill, BsFillPauseCircleFill, BsFillVolumeDownFill} from 'react-icons/bs';
import {RiRepeatOneLine, RiRepeat2Fill} from 'react-icons/ri';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MusicContext } from '../assets/contexts';

const PlayingBar = () => {
    const {currentLibrary, isPlaying, setIsPlaying, songIndex, setSongIndex, audioElem, repeat, setRepeat} = useContext(MusicContext);

    const [currentSong, setCurrentSong] = useState(currentLibrary[songIndex]);
    const [volume, setVolume] = useState(30);

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

    const renderRepeat = () => {
      if (repeat==='one') {
        return <RiRepeatOneLine fontSize='1.2rem' color='#FACD66'/>
      } else if (repeat==='all') {
        return <RiRepeat2Fill fontSize='1.2rem' color='#FACD66'/>
      } else {
        return <RiRepeat2Fill fontSize='1.2rem' color='#FFFFFF'/>
      }
    }

    const handleRepeat = () => {
      if(repeat==='one') {
        setRepeat('none');
      } else if (repeat==='none') {
        setRepeat('all')
      } else {
        setRepeat('one')
      }
    }

    const handleEnd = () => {
      if (repeat==='all') {
        console.log('play all')
        setIsPlaying(false);
        nextSong();
        setIsPlaying(true);
      } else if (repeat==='none') {
        setIsPlaying(false);
        audioElem.current.currentTime = 0;
      }
    }

    const nextSong = () => {
        setSongIndex(prevValue => {
          if (prevValue < currentLibrary.length-1) {
            return prevValue + 1;
          } else {
            return prevValue;
          }
        })
        audioElem.current.currentTime = 0;
    }

    const prevSong = () => {
        setSongIndex(prevValue => {
          if (prevValue > 0) {
            return prevValue - 1;
          } else {
            return prevValue;
          }
        })
        audioElem.current.currentTime = 0;
    }

    const onPlaying = () => {
        const duration = audioElem.current.duration;
        const currentTime = audioElem.current.currentTime;

        setCurrentSong({...currentSong, progress: (currentTime/duration) * 100, length: duration});
    }

    const handleChange = (e) => {
        const newProgress = e.target.value;
        audioElem.current.currentTime = (newProgress/100) * currentSong.length;
    }

    const handleVolume = (e) => {
      const {value} = e.target;
      setVolume(value);
    }
    useEffect(() => {
      setCurrentSong(currentLibrary[songIndex]);
    },[songIndex, currentLibrary])

    useEffect(() => {
        isPlaying ? audioElem.current.play() : audioElem.current.pause()
    }, [isPlaying, currentSong, audioElem])

    useEffect(() => {
      if (audioElem) {
        audioElem.current.volume = volume/100
      }
    }, [volume, audioElem])
    

  return (
    <div className='text-white py-4 md:pt-4 md:pb-1 px-3 md:px-7 play-bar w-full z-40 flex'>
        <div className='flex w-8/12 md:w-3/12 justify-center items-center'>
            <img className='w-16 h-16 rounded-xl mx-2' src={currentSong.image} alt='song'/>
            <div className='mx-2 md:p-0'>
                <h1 className='text-white text-xl md:text-2xl'>{currentSong.title}</h1>
                <h1 className='text-sm md:text-base opacity-50'>{currentSong.artiste}</h1>
            </div>
        </div>
        <div className='w-4/12 md:w-7/12'>
            <audio autoPlay src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} onEnded={handleEnd}/>
            <div className='hidden md:flex gap-10 justify-center items-center mt-2 mb-5'>
                <span><BsShuffle fontSize='1.1rem' color='#FFFFFF'/></span>
                <span onClick={prevSong}><BsSkipStartFill fontSize='1.2rem' color='#FFFFFF'/></span>
                <span onClick={playPause} className='play-button flex justify-center'>{isPlaying ? <BsFillPauseCircleFill fontSize='2rem' color='#FACD66'/> : <BsPlayCircleFill fontSize='2rem' color='#FACD66'/>}</span>
                <span onClick={nextSong}><BsSkipEndFill fontSize='1.2rem' color='#FFFFFF'/></span>
                <span onClick={handleRepeat}>{renderRepeat()}</span>
            </div>
            <div className='flex md:hidden gap-10 justify-end items-center mt-2 mb-5'>
                <span onClick={playPause} className='play-button flex justify-center'>{isPlaying ? <BsFillPauseCircleFill fontSize='2rem' color='#FACD66'/> : <BsPlayCircleFill fontSize='2rem' color='#FACD66'/>}</span>
                <span onClick={nextSong}><BsSkipEndFill fontSize='1.2rem' color='#FFFFFF'/></span>
            </div>
            <ThemeProvider theme={theme}>
                <span className='mx-3 hidden md:flex'><Slider onChange={handleChange} value={currentSong.progress} aria-label="Default" valueLabelDisplay="auto" color='primary'/></span>
            </ThemeProvider>
        </div>
        <div className='md:flex gap-2 w-2/12 justify-center items-center hidden'>
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
                  value={volume}
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