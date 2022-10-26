import React, { useEffect, useState } from 'react';
import song1 from '../images/song1.png';
import SongCard from './SongCard';
import { Scrollbar, A11y, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';

const HomeSongs = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const resizeWindow = () => {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', resizeWindow);

    return () => {
      window.removeEventListener('resize', resizeWindow);
    }
  }, [])

  return (
    <div className='text-white mb-20'>
        <h1 className='text-2xl font-bold pt-8 pb-4'>New Releases</h1>
        <Swiper
            modules={[Scrollbar, A11y, Keyboard]}
            spaceBetween={5}
            slidesPerView={(screenWidth/193)}
            keyboard={{ enabled: true, onlyInViewport: true }}
            scrollbar={{ draggable: true, hide: true, el: '.myScrollBar'}}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide><SongCard img={song1} title={'Otilo'} artist={'Poco Lee'} /></SwiperSlide>
            <SwiperSlide><SongCard img={song1} title={'Otilo'} artist={'Poco Lee'} /></SwiperSlide>
            <SwiperSlide><SongCard img={song1} title={'Otilo'} artist={'Poco Lee'} /></SwiperSlide>
            <SwiperSlide><SongCard img={song1} title={'Otilo'} artist={'Poco Lee'} /></SwiperSlide>
            <SwiperSlide><SongCard img={song1} title={'Otilo'} artist={'Poco Lee'} /></SwiperSlide>
            <SwiperSlide><SongCard img={song1} title={'Otilo'} artist={'Poco Lee'} /></SwiperSlide>
            <SwiperSlide><SongCard img={song1} title={'Otilo'} artist={'Poco Lee'} /></SwiperSlide>
            <SwiperSlide><SongCard img={song1} title={'Otilo'} artist={'Poco Lee'} /></SwiperSlide>
        </Swiper>
        <div className='myScrollBar'></div>
        <h1 className='text-2xl font-bold pb-4 pt-8'>Popular in your area</h1>
        <Swiper
            modules={[Scrollbar, A11y, Keyboard]}
            spaceBetween={5}
            slidesPerView={(screenWidth/193)}
            keyboard={{ enabled: true, onlyInViewport: true }}
            scrollbar={{ draggable: true, hide: true, el: '.myScrollBar'}}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide><SongCard img={song1} title={'Otilo'} artist={'Poco Lee'} /></SwiperSlide>
            <SwiperSlide><SongCard img={song1} title={'Otilo'} artist={'Poco Lee'} /></SwiperSlide>
            <SwiperSlide><SongCard img={song1} title={'Otilo'} artist={'Poco Lee'} /></SwiperSlide>
            <SwiperSlide><SongCard img={song1} title={'Otilo'} artist={'Poco Lee'} /></SwiperSlide>
            <SwiperSlide><SongCard img={song1} title={'Otilo'} artist={'Poco Lee'} /></SwiperSlide>
            <SwiperSlide><SongCard img={song1} title={'Otilo'} artist={'Poco Lee'} /></SwiperSlide>
            <SwiperSlide><SongCard img={song1} title={'Otilo'} artist={'Poco Lee'} /></SwiperSlide>
            <SwiperSlide><SongCard img={song1} title={'Otilo'} artist={'Poco Lee'} /></SwiperSlide>
        </Swiper>
        <div className='myScrollBar'></div>
    </div>
  )
}

export default HomeSongs