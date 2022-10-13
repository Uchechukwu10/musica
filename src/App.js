import './App.css';
import Banner from './components/Banner';
import Charts from './components/Charts';
import HomeSongs from './components/HomeSongs';
import PlayingBar from './components/PlayingBar';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App flex">
      <SideBar />
      <div className='flex flex-col w-10/12'>
        <SearchBar />
        <div className='flex'>
          <Banner />
          <Charts />
        </div>
        <HomeSongs />
        <PlayingBar />
      </div>
    </div>
  );
}

export default App;
