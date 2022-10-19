import React from 'react';
import { BiHeart } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const ChartCard = (props) => {
  let navigate = useNavigate();
  
  return (
    <div onClick={() => {navigate(`/charts/${props.id}`)}} className='flex chart-card text-white my-2 p-3 items-center'>
        <div className='mx-2' ><img className='w-16 h-16' src={props.img} alt='thumbnail'/></div>
        <div className='w-8/12 mx-2'>
            <h1 className='text-xl'>{props.title}</h1>
            <h1 className='text-base opacity-50'>{props.desc}</h1>
            <h1 className='text-base'>{props.duration}</h1>
        </div>
        <div className='flex justify-center items-center like-icon w-10 h-10 mx-2'><BiHeart fontSize='1.2rem' color='#FACD66'/></div>

    </div>
  )
}

export default ChartCard