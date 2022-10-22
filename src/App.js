import './App.css';
import PlayingBar from './components/PlayingBar';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Collections from './pages/Collections';
import ViewChart from './pages/ViewChart';
import { MusicContext } from './assets/contexts';
import { myCharts } from './assets/library';
import { useState } from 'react';
import { likes } from './assets/library';

function App() {
  const [chartIds, setChartIds] = useState(myCharts);
  const [collLikes, setCollLikes] = useState(likes);

  return (
    <Router>
      <MusicContext.Provider value={{chartIds, setChartIds, collLikes, setCollLikes}}>
        <div className="App relative">
          <div className='flex'>
            <SideBar />
              <div className='flex flex-col w-10/12'>
                <SearchBar />
                <Routes>
                    <Route path='/' element={ <Home /> }/>
                    <Route path='collections' element={ <Collections /> }/>
                    <Route path='charts/:id' element={ <ViewChart /> }/>
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
