import React from 'react';
import song1 from '../images/song1.png';
import SongCard from './SongCard';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HomeSongs = () => {

  return (
    <div className='text-white mb-20'>
        <h1 className='text-2xl font-bold pt-8 pb-4'>New Releases</h1>
        <Swiper
            modules={[Scrollbar, A11y, Keyboard]}
            spaceBetween={10}
            slidesPerView={6}
            keyboard={{ enabled: true, onlyInViewport: true }}
            scrollbar={{ draggable: true, hide: true, el: '.myScrollBar'}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
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
            spaceBetween={10}
            slidesPerView={6}
            keyboard={{ enabled: true, onlyInViewport: true }}
            scrollbar={{ draggable: true, hide: true, el: '.myScrollBar'}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
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