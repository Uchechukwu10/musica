import React from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {
  return (
    <div className='w-full'>
        <form className='flex flex-row search-bar items-center my-10 mx-10'>
            <BiSearch fontSize='1.5rem' color='#FFFFFF40'/>
            <input type='text' placeholder='Search artists' className='ml-7 text-xl search'/>
        </form>
    </div>
  )
}

export default SearchBar