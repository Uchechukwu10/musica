import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {

  const [viewport, setViewport] = useState(375);
  const [mobileIcon, setMobileIcon] = useState(true);

  const navigate = useNavigate();

  const handleResize = () => {
    setViewport(window.innerWidth);
  }

  const handleIcon = () => {
    setMobileIcon(false);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="w-full flex justify-end md:justify-start">
      <form className="flex flex-row search-bar items-center my-2 md:my-6 mx-4 md:mx-10 md:p-4 w-fit">
        <span className={mobileIcon ? "" : "hidden"} onClick={handleIcon}><BiSearch fontSize="1.5rem" color="#FFFFFF40"/></span>
        <input
          id='search-input' 
          type="text"
          placeholder="Search artists"
          className="hidden md:inline ml-7 text-xl search"
          onFocus={props.addFocus}
          // onBlur={props.removeFocus}
          onChange={(e) => props.handleSearch(e)}
        />
        {mobileIcon===false && <input
          id='search-input' 
          type="text"
          placeholder="Search artists"
          className="w-40 md:hidden ml-7 text-xl search"
          onFocus={props.addFocus}
          onBlur={() => setMobileIcon(true)}
          onChange={(e) => props.handleSearch(e)}
        />}
      </form>
    </div>
  );
};

export default SearchBar;
