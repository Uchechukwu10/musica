import React from 'react';
import song3 from '../images/song3.png';
import {FiHeart} from 'react-icons/fi';
import {BsThreeDotsVertical} from 'react-icons/bs';

const ListedSong = (props) => {
  return (
    <div className='flex w-full song-list p-3 text-white'>
      <img src={props.image} alt='song' className='w-10 h-10 rounded-lg mx-2'/>
      <span className='flex items-center ml-4 mr-20'><FiHeart fontSize='1.3rem' /></span>
      <div className='flex w-full px-3 items-center'>
        <span className='song-text w-6/12'>{props.title} ~ {props.artiste}</span>
        <span className='song-text w-3/12'>Single</span>
        <span className='song-text w-2/12'>4:17</span>
        <span className='flex items-center w-1/12 justify-end'><BsThreeDotsVertical fontSize='1.3rem' color='#FACD66'/></span>
      </div>
    </div>
  )
}

export default ListedSong;