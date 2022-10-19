import React, { useEffect, useRef, useState } from 'react';
import song5 from '../images/song5.png';
import {BsPlayCircleFill} from 'react-icons/bs';

const CollectionCard = (props) => {
    const [details, setDetails] = useState(false);
    const image = useRef();

    const handleHover = () => {
        image.current.style.backgroundSize = '230px 250px';
        setDetails(true);
    }

    const handleOut = () => {
        image.current.style.backgroundSize = '210px 227px';
        setDetails(false);
    }

    useEffect(() => {
        image.current.style.background = `linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%), url(${props.image})`;
        image.current.style.backgroundRepeat = 'no-repeat';
        image.current.style.backgroundSize = '210px 227px';
    }, []);

  return (
    <div className='collection-card relative my-1 mx-3 w-52 h-56 cursor-pointer' onMouseOver={handleHover} onMouseOut={handleOut}>
        <div className='collection-img w-52 h-56' ref={image}></div>
        <div className='absolute left-5 bottom-4 text-white'>
            <h1 className='text-2xl'>{props.title}</h1>
            <h1 className='text-xs '>{props.desc}</h1>
            <h1 className={'text-xs mt-2 ' + (details ? '' : 'hidden')}>2.5M likes</h1>
        </div>
        <div className={'flex items-center coll-play w-fit absolute right-5 bottom-7 ' + (details ? '' : 'hidden')}>
            <BsPlayCircleFill fontSize='2rem' color='#7d643c'/>
        </div>
        
    </div>
  )
}

export default CollectionCard;