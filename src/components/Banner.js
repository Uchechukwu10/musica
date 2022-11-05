import React, { useState, useEffect } from 'react';
import { RiHeart2Fill } from 'react-icons/ri';
import eric from '../images/ericesma.png';
import vector from '../images/vector.png';
import man1 from '../images/man1.png';
import man2 from '../images/man2.png';
import man3 from '../images/man3.png';
import woman1 from '../images/woman1.png';
import woman2 from '../images/woman2.png';


const Banner = () => {
  const [viewport, setViewport] = useState(375);

  const handleResize = () => {
    setViewport(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return (
    <div className='text-white banner w-11/12 md:w-7/12 my-5 ml-5 mr-10 relative p-8 h-fit'>
        <div className='flex flex-col'>
            <h1 className='text-lg mb-32 md:mb-8'>Currated playlist</h1>
            <h1 className='text-4xl font-bold mt-32 md:mt-8'>R & B Hits</h1>
            <h1 className='text-xl mb-6 md:mb-8 my-2'>All mine, Lie again, Petty call me everyday,<br />Out of time, No love, Bad habit,<br />and so much more</h1>
            <div className='flex justify-between md:justify-start mt-8 mb-4'>
                <div className='relative picture-likes flex w-4/12 md:w-2/12 mr-3'>
                        <img className='absolute left-0' src={man1} alt='user' />
                        <img className='absolute left-4' src={man2} alt='user' />
                        <img className='absolute left-8' src={man3} alt='user' />
                        <img className='absolute left-12' src={woman1} alt='user' />
                        <img className='absolute left-16' src={woman2} alt='user' />
                </div>
                <div className='banner-heart'><RiHeart2Fill fontSize='1.5rem' /></div>
                <h1 className='text-2xl md:text-xl mx-3'>33k Likes</h1>
            </div>
        </div>
        {viewport>768 && <img src={eric} alt='Eric' className='absolute eric z-20' />}
        <img src={vector} alt='Vector' className='absolute vector z-10' />
    </div>
  )
}

export default Banner