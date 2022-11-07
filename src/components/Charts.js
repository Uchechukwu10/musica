import React from 'react';
import ChartCard from './ChartCard';
import charts from '../assets/allCharts';
import { motion } from "framer-motion";
import { Scrollbar, A11y, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';

const list = {
  visible: {
    opacity: 1,
    scale: 1,
    transition : {
      staggerChildren: 0.5,
      duration: 1
    }
  },
  hidden: {
    opacity: 0.8,
    scale: 1,
  }
}

const Charts = () => {

  return (
        <div className=' flex flex-col text-white w-full md:w-5/12'>
            <h1 className='text-3xl font-bold'>Top Charts</h1>
            <motion.div
              variants={list}
              initial='hidden'
              animate='visible'
             className='hidden md:flex flex-col my-4'>
                {charts.map((chart, index) => (
                  <ChartCard key={index} img={chart.image} title={chart.title} desc={chart.desc} duration={chart.duration} id={chart.id} list={list}/>
                ))}
            </motion.div>
            <div className='md:hidden flex px-3'>
              <Swiper
                  modules={[Scrollbar, A11y, Keyboard]}
                  spaceBetween={10}
                  slidesPerView={1.2}
                  keyboard={{ enabled: true, onlyInViewport: true }}
                  scrollbar={{ draggable: true, hide: true, el: '.myScrollBar'}}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  >
                  <div className='flex flex-col my-4'>
                      {charts.map((chart, index) => (
                        <SwiperSlide><ChartCard key={index} img={chart.image} title={chart.title} desc={chart.desc} duration={chart.duration} id={chart.id}/></SwiperSlide>
                      ))}
                  </div>
              </Swiper>
            </div>
        </div>
  )
}

export default Charts