import React, { useContext, useEffect, useState } from "react";
import { MusicContext } from "../assets/contexts";
import ChartCard from "../components/ChartCard";
import ListedSong from "../components/ListedSong";
import { likes } from "../assets/library";
import allSongs from "../assets/allSongs";
import charts from "../assets/allCharts";

const SearchList = (props) => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [searchedSong, setSearchedSong] = useState(0);
  const [searched, setSearched] = useState({
    name: "",
    charts: [],
    songs: [],
  });

  const { setCurrentLibrary, setSongIndex, setIsPlaying, audioElem, focus, searchInput } = useContext(MusicContext);

  const playSong = (songId) => {
    const selected = allSongs.find((song) => song.id===songId);
    setSearchedSong(songId);
    setNowPlaying(prevValue => [...prevValue, selected]);
  }

  useEffect(() => {
    if (nowPlaying.length>0) {
      console.log(nowPlaying);
      const index = nowPlaying.findIndex((song) => song.id===searchedSong);
      setCurrentLibrary(nowPlaying);
      setSongIndex(index);
      setIsPlaying(true);
      audioElem.current.currentTime = 0;
    }
  }, [nowPlaying]);

  useEffect(() => {
    if (searchInput !== "") {
      let displayMatchedCharts = [];
      let displayMatchedSongs = [];

      charts.map((chart) => {
        if (
          chart.title.toLowerCase().includes(searchInput) ||
          chart.desc.toLowerCase().includes(searchInput)
        ) {
          displayMatchedCharts.push(chart);
        }
      });
      allSongs.map((song) => {
        if (
          song.title.toLowerCase().includes(searchInput) ||
          song.artiste.toLowerCase().includes(searchInput)
        ) {
          displayMatchedSongs.push(song);
        }
      });
      setSearched({
        name: "Likes",
        charts: displayMatchedCharts,
        songs: displayMatchedSongs,
      });
    } else {
      setSearched({ name: "Likes", charts: [], songs: [] });
    }
  }, [searchInput]);

  return (
    <div
      id='search-list'
      className={
        focus
          ? "search-list flex flex-col w-full absolute z-40 top-20 md:top-28"
          : "hidden"
      }
    >
      <div className="pb-3">
        <span
          className={
            searched.charts.length > 0
              ? "text-white text-xl ml-3 mb-3"
              : "hidden"
          }
        >
          Charts
        </span>
        <div className="flex gap-5 flex-wrap px-4">
          {searched.charts.map((chart, index) => {
            return (
              <span className="w-64"><ChartCard
                key={index}
                img={chart.image}
                title={chart.title}
                desc={chart.desc}
                duration={chart.duration}
                id={chart.id}
                button={true}
              /></span>
            );
          })}
        </div>
      </div>
      <div className="pt-4">
        <span
          className={
            searched.songs.length > 0
              ? "text-white text-xl ml-3 mb-3"
              : "hidden"
          }
        >
          Songs
        </span>
        <div className="flex flex-col w-full gap-3 px-2 mb-4 md:px-5">
          {searched.songs.map((song, index) => {
            return (
              <ListedSong
                key={index}
                image={song.image}
                title={song.title}
                artiste={song.artiste}
                playSong={playSong}
                id={song.id}
              />
            );
          })}
        </div>
      </div>
      {searched.charts.length === 0 && searched.songs.length === 0 && searchInput !== '' && (
        <div className="flex justify-center items-center text-white text-2xl font-bold">
          No results found. Try another search
        </div>
      )}
      {searchInput==='' && <div></div>}
    </div>
  );
};

export default SearchList;
