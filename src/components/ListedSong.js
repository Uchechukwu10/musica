import React, { useState, useEffect, useContext } from "react";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BsThreeDotsVertical } from "react-icons/bs";
import { MusicContext } from '../assets/contexts';

const ListedSong = (props) => {
  const [songPaper, setSongPaper] = useState(false);
  const [liked, setLiked] = useState(false);

  const { setLibraryIds, setCollLikes, collLikes } = useContext(MusicContext);

  const addToLibrary = () => {
    setLibraryIds(prevValue => [...prevValue, Number(props.id)]);
  }

  const handlePaper = () => {
    setSongPaper(!songPaper);
  };

  const handlePaperOut = (e) => {
    if (!e.target.closest('#options')) {
      console.log('Outer Click');
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
  }, [])
  

  return (
    <div className="flex w-full song-list p-3 text-white">
      <img src={props.image} alt="song" className="w-10 h-10 rounded-lg mx-2" />
      <span className="flex items-center ml-4 mr-20" onClick={handleLike}>
        {liked ? <FaHeart fontSize="1.3rem" color="#FACD66"/> : <FaRegHeart fontSize="1.3rem" color="#FACD66"/>}
      </span>
      <div className="flex w-full px-3 items-center">
        <span className="song-text w-6/12">
          {props.title} ~ {props.artiste}
        </span>
        <span className="song-text w-3/12">Single</span>
        <span className="song-text w-2/12">4:17</span>
        <span
          id="options"
          className="flex items-center w-1/12 justify-end relative"
          onClick={(e) => {
            // e.stopPropagation();
            handlePaper();
          }}
        >
          <div className={songPaper ? "options-paper w-40 text-white absolute z-40 p-4 rounded-lg" : "hidden"}>
            <ul>
              <li className="py-1 cursor-pointer">Play song</li>
              <li className="py-1 cursor-pointer" onClick={addToLibrary}>Add to library</li>
            </ul>
          </div>
          <BsThreeDotsVertical fontSize="1.3rem" color="#FACD66" />
        </span>
      </div>
    </div>
  );
};

export default ListedSong;
