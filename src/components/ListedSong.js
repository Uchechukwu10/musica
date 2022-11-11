import React, { useState, useEffect, useContext, useRef } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BsThreeDotsVertical } from "react-icons/bs";
import { MusicContext } from '../assets/contexts';

const ListedSong = (props) => {
  const [songPaper, setSongPaper] = useState(false);
  const [liked, setLiked] = useState(false);
  const [songText, setSongText] = useState('');
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const option = useRef();

  const item = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: props.i * 0.3
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };

  const { libraryIds, setLibraryIds, setCollLikes, collLikes, paperUp, setPaperUp, searchInput } = useContext(MusicContext);

  const resizeWindow = () => {
    setScreenWidth(window.innerWidth);
}

  const addToLibrary = () => {
    setLibraryIds(prevValue => [...prevValue, Number(props.id)]);
  }

  const removeFromLibrary = () => {
    setLibraryIds(prevValue => {
      const library = prevValue.filter(song => song!==props.id);

      return library;
    })
  }

  const handlePaper = (id) => {
    setSongPaper(!songPaper);
    setPaperUp(id);
  };

  const handlePaperOut = (e) => {
    setSongPaper(false);
    if (!e.target.closest(`#options${paperUp}`)) {
      setSongPaper(false);
    }
  }

  const handleLike = () => {
    if (!liked) {
        setLiked(!liked);
        setCollLikes(prevValue => {
          return {...prevValue, songs: [...prevValue.songs, props.id]};
        });
    } else {
        setLiked(!liked);
        setCollLikes(prevValue => {
          const songLikes = prevValue.songs;
          const index = songLikes.indexOf(props.id);
          if (index > -1) {
              songLikes.splice(index, 1);
          }
          return {...prevValue, songs: songLikes};
        });
    }
  }
  
  useEffect(() => {
    const text = `${props.title} ~ ${props.artiste}`;
    if (text.length > 22) {
      setSongText(text.substring(0, 21) + '...');
    } else {
      setSongText(text);
    }
  },[searchInput])

  useEffect(() => {
    if (songPaper) {
      document.body.addEventListener('click', handlePaperOut);
    }
  
    return () => {
      document.body.removeEventListener('click', handlePaperOut);
    }
  }, [songPaper])

  useEffect(() => {
    if (collLikes.songs.includes(props.id)) {
      setLiked(true);
    }
  }, [collLikes, props.id])

  useEffect(() => {
    window.addEventListener('resize', resizeWindow);

    return () => {
      window.removeEventListener('resize', resizeWindow);
    }
}, [])
  

  return (
    <motion.div variants={item} className="flex w-full song-list p-3 text-white">
      <img src={props.image} alt="song" className="w-10 h-10 rounded-lg mx-2" />
      <span className="hidden md:flex items-center ml-4 mr-20" onClick={handleLike}>
        {liked ? <FaHeart fontSize="1.3rem" color="#FACD66"/> : <FaRegHeart fontSize="1.3rem" color="#FACD66"/>}
      </span>
      {screenWidth>768 ?
      <div className="flex w-full px-3 items-center cursor-pointer" onClick={() => props.playSong(props.id)}>
        <span className="song-text w-6/12">
          {props.title} ~ {props.artiste}
        </span>
        <span className="song-text w-3/12">Single</span>
        <span className="song-text w-2/12">4:17</span>
        <span
          id={`options${props.id}`}
          className="flex items-center w-1/12 justify-end relative cursor-default"
          onClick={(e) => {
            e.stopPropagation();
            handlePaper(props.id);
          }}
        >
          <div className={songPaper && paperUp===props.id ? "options-paper w-48 text-white absolute z-40 p-4 rounded-lg" : "hidden"}>
            <ul>
              <li className="py-1 cursor-pointer">Play song</li>
              <hr className='opacity-60'/>
              {!libraryIds.includes(props.id) ?
              <li className="py-1 cursor-pointer" onClick={addToLibrary}>Add to library</li> :
              <li className="py-1 cursor-pointer" onClick={removeFromLibrary}>Remove from library</li>}
            </ul>
          </div>
          <BsThreeDotsVertical fontSize="1.3rem" color="#FACD66" />
        </span>
      </div>
          :
      <div className="mobile-song flex w-full px-1 items-center cursor-pointer" onClick={() => props.playSong(props.id)}>
        <div className='flex flex-col w-10/12'>
          <span className="song-text text-sm">
            {songText}
          </span>
          <span className="song-text text-xs">Single</span>
        </div>
        <div className='flex flex-col items-end w-2/12'>
            <span
              id={`options${props.id}`}
              className="flex relative cursor-default mb-1"
              onClick={(e) => {
                e.stopPropagation();
                handlePaper(props.id);
              }}
            >
              <div className={songPaper && paperUp===props.id ? "options-paper w-40 text-white absolute z-40 p-4 rounded-lg" : "hidden"}>
                <ul>
                  <li className="py-1 cursor-pointer">Play song</li>
                  <hr className='opacity-60'/>
                  {!libraryIds.includes(props.id) ?
                  <li className="py-1 cursor-pointer" onClick={addToLibrary}>Add to library</li> :
                  <li className="py-1 cursor-pointer" onClick={removeFromLibrary}>Remove from library</li>}
                </ul>
              </div>
              <BsThreeDotsVertical fontSize="1.3rem" color="#FACD66" />
            </span>
            <span className="song-text text-sm mt-1">4:17</span>
        </div>
      </div>}
    </motion.div>
  );
};

export default ListedSong;
