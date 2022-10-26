import React, { useEffect, useRef, useState } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CollectionCard = (props) => {
  let navigate = useNavigate();
  const [details, setDetails] = useState(false);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const image = useRef();

  const resizeWindow = () => {
    if (window.innerWidth>600) {
      setImageWidth(210);
      setImageHeight(227);
    } else {
      setImageWidth(0.87*window.innerWidth);
      setImageHeight(0.57*window.innerWidth);
    }
  }

  const handleHover = () => {
    image.current.style.backgroundSize = `${1.1*imageWidth}px ${1.1*imageHeight}px`;
    setDetails(true);
  };

  const handleOut = () => {
    image.current.style.backgroundSize = `${imageWidth}px ${imageHeight}px`;
    setDetails(false);
  };

  useEffect(() => {
    image.current.style.background = `linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%), url(${props.image})`;
    image.current.style.backgroundRepeat = "no-repeat";
    image.current.style.backgroundSize = `${imageWidth}px ${imageHeight}px`;
  }, [imageWidth]);

  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);

    return () => {
      window.removeEventListener('resize', resizeWindow);
    }
  }, [])

  return (
    <div
      className="collection-card relative my-1 mx-3 w-11/12 md:w-52 h-56 cursor-pointer"
      onMouseOver={handleHover}
      onMouseOut={handleOut}
      onClick={() => navigate(`/charts/${props.id}`)}
    >
      <div className="collection-img w-full h-52 md:w-52 md:h-56" ref={image}></div>
      <div className="absolute left-5 bottom-4 text-white">
        <h1 className="text-2xl">{props.title}</h1>
        <h1 className="text-xs ">{props.desc}</h1>
        <h1 className={"text-xs mt-2 " + (details ? "" : "hidden")}>
          2.5M likes
        </h1>
      </div>
      <div
        className={
          "flex items-center coll-play w-fit absolute right-5 bottom-7 " +
          (details ? "" : "hidden")
        }
      >
        <BsPlayCircleFill fontSize="2rem" color="#7d643c" />
      </div>
    </div>
  );
};

export default CollectionCard;
