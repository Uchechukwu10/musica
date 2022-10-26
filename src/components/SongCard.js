import React from 'react';


const SongCard = (props) => {
  return (
    <div className='flex flex-col song-card mx-2'>
        <div><img className='w-40 h-40' src={props.img} alt='song' /></div>
        <h1 className='mt-2 ml-3 text-white text-xl'>{props.title}</h1>
        <h1 className='ml-3 text-white text-lg opacity-50'>{props.artist}</h1>
    </div>
  )
}

export default SongCard