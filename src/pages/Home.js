import React, {useEffect} from 'react';
import Banner from '../components/Banner';
import Charts from '../components/Charts';
import HomeSongs from '../components/HomeSongs';

const Home = () => {
  useEffect(() => {
    document.body.style.background = `#1D2123`;
    document.body.style.backgroundSize = '1440px auto';
  }, [])

  return (
    <div>
        <div className='flex flex-col md:flex-row'>
            <Banner />
            <Charts />
        </div>
        <HomeSongs />
    </div>
  )
}

export default Home