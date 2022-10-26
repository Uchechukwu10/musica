import React from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {
  return (
    <div className='w-full flex justify-end md:justify-start'>
        <form className='flex flex-row search-bar items-center my-2 md:my-6 mx-4 md:mx-10 md:p-4 w-fit'>
            <BiSearch fontSize='1.5rem' color='#FFFFFF40'/>
            <input type='text' placeholder='Search artists' className='hidden md:inline ml-7 text-xl search'/>
        </form>
    </div>
  )
}

export default SearchBar;