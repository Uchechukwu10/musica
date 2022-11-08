import "./App.css";
import PlayingBar from "./components/PlayingBar";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import LogoMenu from "./components/LogoMenu";
import SearchList from "./pages/SearchList";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import ViewChart from "./pages/ViewChart";
import { MusicContext } from "./assets/contexts";
import { myCharts, likes, library } from "./assets/library";
import { useState, useRef } from "react";
import allSongs from "./assets/allSongs";
import MobileNav from "./components/MobileNav";

function App() {
  const audioElem = useRef();
  const [chartIds, setChartIds] = useState(myCharts);
  const [collLikes, setCollLikes] = useState(likes);
  const [libraryIds, setLibraryIds] = useState(library);
  const [currentLibrary, setCurrentLibrary] = useState(allSongs);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songIndex, setSongIndex] = useState(0);
  const [opened, setOpened] = useState(false);
  const [focus, setFocus] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [repeat, setRepeat] = useState('none');
  const [paperUp, setPaperUp] = useState(null);

  const handleSearch = (e) => {
    const text = e.target.value.toLowerCase();
    setSearchInput(text);
  }

  return (
    <Router>
      <MusicContext.Provider
        value={{
          chartIds,
          setChartIds,
          collLikes,
          setCollLikes,
          libraryIds,
          setLibraryIds,
          currentLibrary,
          setCurrentLibrary,
          isPlaying,
          setIsPlaying,
          songIndex,
          setSongIndex,
          audioElem,
          repeat,
          setRepeat,
          paperUp,
          setPaperUp,
          searchInput,
          setSearchInput
        }}
      >
        <div className="App relative">
          <div className="flex">
            <SideBar />
            {opened && <MobileNav setOpened={setOpened}/>}
            <div className="flex flex-col w-full md:pr-7 md:w-11/12 px-2 relative">
              <div className="flex ">
                <LogoMenu setOpened={setOpened}/>
                <SearchBar handleSearch={handleSearch} searchInput={searchInput}/>
              </div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/search" element={<SearchList />} />
                <Route path="/charts/:id" element={<ViewChart />} />
              </Routes>
            </div>
          </div>
          <PlayingBar />
        </div>
      </MusicContext.Provider>
    </Router>
  );
}

export default App;
