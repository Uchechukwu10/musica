import React, {useEffect, useState, useContext} from 'react';
import {MdLibraryAdd} from 'react-icons/md';
import {BsPlayCircleFill} from 'react-icons/bs';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import charts from '../assets/allCharts';
import {Dialog, DialogTitle} from '@mui/material';
import { MusicContext } from '../assets/contexts';

const ViewChartBanner = (props) => {
    const {collLikes, setCollLikes} = useContext(MusicContext);

    const [open, setOpen] = useState(false);
    const [liked, setLiked] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Uche');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    const handleItemClick = () => {
        setOpen(false);
        props.addToCollection();
    }

    const handleLike = () => {
        if (!liked) {
            setLiked(!liked);
            props.handleChartLike();
        } else {
            setLiked(!liked);
            props.handleChartUnlike();
        }
        
    }

    
    useEffect(() => {
        const current = charts.find((chart) => chart.id == props.id);
        document.body.style.background = `linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%), url(${current.image})`;
        document.body.style.backgroundSize = '1440px auto';
        return () => {
            document.body.style.background = `#1D2123`;
            document.body.style.backgroundSize = '1440px 1000px';
        }
    }, [])

    useEffect(() => {
        if (collLikes.charts.includes(Number(props.id))) {
            setLiked(true);
        }
    }, [])
    
  return (
    <div className='chart-banner flex text-white'>
        <div className='px-5 py-5'>
            <img src={props.currentChart.image} alt='lead image' className='w-72 h-72'/>
        </div>
        <div className='chart-banner-text justify-center flex flex-col w-6/12 mx-3'>
            <h1 className='text-4xl font-bold pt-20 pb-2 chart-title'>{props.currentChart.title}</h1>
            <h1 className='text-base py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</h1>
            <h1 className='text-base py-2'>{props.currentChart.noOfSongs} songs ~ {props.currentChart.duration}</h1>
            <div className='flex py-6'>
                <div className='chart-banner-action flex p-3 mx-1 cursor-pointer'>
                    <span className='flex items-center mx-2'><BsPlayCircleFill fontSize='1.3rem' color='#FACD66'/></span>
                    <span className='text-sm mx-2'>Play all</span>
                </div>
                <div className='chart-banner-action flex p-3 mx-1 cursor-pointer' onClick={handleClickOpen}>
                    <span className='flex items-center mx-2'><MdLibraryAdd fontSize='1.3rem' color='#FACD66'/></span>
                    <span className='text-sm mx-2'>Add to collection</span>
                </div>
                <Dialog
                    sx={{
                      '& .MuiDialog-paper': {
                          borderRadius: '10px',
                          color: '#FFFFFF',
                          backgroundColor: '#1A1E1F',
                          
                        },
                      }}
                    selectedValue={selectedValue}
                    open={open}
                    onClose={handleClose}
                >
                    <DialogTitle>Add to collection</DialogTitle>
                    <hr />
                    <div>
                        <ul className='flex flex-col justify-center items-center pt-3'>
                            <li className='text-lg py-2 cursor-pointer' onClick={handleItemClick}>Charts</li>
                            <li className='text-lg py-2 cursor-pointer' onClick={handleItemClick}>Likes</li>
                            <li className='text-lg py-2 cursor-pointer' onClick={handleItemClick}>Gospel</li>
                        </ul>
                    </div>
                </Dialog>
                <div className='chart-banner-action p-3 mx-1 cursor-pointer' onClick={() => handleLike()}>{liked ? <FaHeart fontSize='1.3rem' color='#FACD66'/> : <FaRegHeart fontSize='1.3rem' color='#FACD66'/>}</div>
            </div>
        </div>
    </div>
  )
}

export default ViewChartBanner