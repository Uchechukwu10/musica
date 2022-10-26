import React from 'react';
import { IoClose } from 'react-icons/io5';
import { HiHome } from 'react-icons/hi';
import { TbPlaylist } from 'react-icons/tb';
import { BiRadio } from 'react-icons/bi';
import { MdMusicVideo } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const MobileNav = (props) => {
    let navigate = useNavigate();

  return (
    <div className='absolute w-full mobile-nav z-50' >
        <div className='flex flex-col justify-center h-screen items-start relative pl-7 pr-4'>
            <div className='py-2 my-3 flex nav-item' onClick={() => {
                navigate(`/`);
                props.setOpened(false);
            }}>
                <span className='mx-2'><HiHome fontSize='2rem' color='#EFEEE040'/></span>
                <span className='mx-2 text-lg font-bold'>Home</span>
            </div>
            <div className='py-2 my-3 flex nav-item' onClick={() => {
                navigate(`/collections`);
                props.setOpened(false);
            }}>
                <span className='mx-2'><TbPlaylist fontSize='2rem' color='#EFEEE040'/></span>
                <span className='mx-2 text-lg font-bold'>My collection</span>
            </div>
            <div className='py-2 my-3 flex nav-item'>
                <span className='mx-2'><BiRadio fontSize='2rem' color='#EFEEE040'/></span>
                <span className='mx-2 text-lg font-bold'>Radio</span>
            </div>
            <div className='py-2 my-3 flex nav-item'>
                <span className='mx-2'><MdMusicVideo fontSize='2rem' color='#EFEEE040'/></span>
                <span className='mx-2 text-lg font-bold'>Music videos</span>
            </div>
            <div className='py-2 my-3 flex nav-item'>
                <span className='mx-2'><FaUser fontSize='2rem' color='#EFEEE040'/></span>
                <span className='mx-2 text-lg font-bold'>Profile</span>
            </div>
            <div className='py-2 my-3 flex nav-item'>
                <span className='mx-2'><IoLogOut fontSize='2rem' color='#EFEEE040'/></span>
                <span className='mx-2 text-lg font-bold'>Log out</span>
            </div>
            <span onClick={() => props.setOpened(false)} className='absolute right-4 top-4'><IoClose color='#EFEEE040' fontSize='2rem'/></span>
        </div>
    </div>
  )
}

export default MobileNav