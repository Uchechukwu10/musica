import React, { useState, useContext, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MusicContext } from "../assets/contexts";

const ChartCard = (props) => {
  const [liked, setLiked] = useState(false);
  let navigate = useNavigate();

  const { collLikes, setCollLikes } = useContext(MusicContext);

  const handleLike = () => {
    if (!liked) {
      setLiked(!liked);
      setCollLikes(prevValue => {
        return {...prevValue, charts: [...prevValue.charts, props.id]};
      });
    } else {
      setLiked(!liked);
      setCollLikes(prevValue => {
        const chartLikes = prevValue.charts;
        const index = chartLikes.indexOf(props.id);
        if (index > -1) {
            chartLikes.splice(index, 1);
        }  
        return {...prevValue, charts: chartLikes};
      });
    }
  };

  useEffect(() => {
    if (collLikes.charts.includes(Number(props.id))) {
        setLiked(true);
    }
  }, [])

  return (
    <div
      onClick={() => {
        navigate(`/charts/${props.id}`);
      }}
      className="flex flex-col md:flex-row chart-card text-white my-2 p-3 justify-center md:items-center"
    >
      <div className="mx-2">
        <img className="w-28 h-28 md:w-16 md:h-16" src={props.img} alt="thumbnail" />
      </div>
      <div className="w-full md:w-8/12 mx-2">
        <h1 className="text-xl">{props.title}</h1>
        <h1 className="text-base opacity-50">{props.desc}</h1>
        {!props.button && <h1 className="text-base mt-5">{props.duration}</h1>}
      </div>
      {!props.button && <div
        className="chart-card-like flex justify-center items-center like-icon w-10 h-10 mx-2 cursor-default"
        onClick={(e) => {
          e.stopPropagation();
          handleLike();
        }}
      >
        {liked ? (
          <FaHeart fontSize="1.3rem" color="#FACD66" />
        ) : (
          <FaRegHeart fontSize="1.3rem" color="#FACD66" />
        )}
      </div>}
    </div>
  );
};

export default ChartCard;
