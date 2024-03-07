import React, { useState } from "react";
import { FaShareAlt, FaCommentAlt, FaHeart } from "react-icons/fa";
import shareOnTwitter from "./shareOnTwitter";

const MovieCard = (props) => {
  const [isLiked, setLiked] = useState(false);
  const [isCommented, setCommented] = useState(false);

  const handleLikeClick = () => {
    setLiked(!isLiked);
  };

  const handleCommentClick = () => {
    setCommented(!isCommented);
  };

  return (
    <div
      className="w-4/5  bg-no-repeat  bg-rgb-43-49-72  cursor-pointer relative z-10"
      style={{
        backgroundImage: `url(${props.movie.banner})`,
        filter: `drop-shadow(0 0 0.75rem )`,
        backgroundSize: "cover",
      }}
    >
      <div className="h-96 bg-gradient-to-r from-black via-rgba-0-0-0-8 to-rgba-0-0-0-24  flex  flex-col justify-evenly gap-6">
        <div className="flex gap-8 p-6.5">
          <div className="">
            <img src={props.movie.poster} className="h-30 w-28" />
          </div>
          <div className="flex gap-4 flex-col">
            <h2 className="text-white text-xl mb-2">{props.movie.title}</h2>
            <p className="text-blue-400  mb-4">
              {props.movie.year}, {props.movie.director}
            </p>
            <div className="text-white flex gap-2">
              <p className="border-2 border-gray-500 px-2 rounded-lg text-sm">
                {props.movie.runtime}
              </p>
              <p>{props.movie.genres.join(", ")}</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-white w-2/5">{props.movie.desc}</p>
        </div>
        <div className="flex gap-4">
          <FaShareAlt
            onClick={() => shareOnTwitter(props.movie)}
            className="text-white hover:text-red-400"
          />
          <FaHeart
            onClick={handleLikeClick}
            className={`text-white hover:text-green-400" ${
              isLiked ? "text-green-400" : "hover:text-green-400"
            }`}
          />
          <FaCommentAlt
            onClick={handleCommentClick}
            className={`text-white hover:text-yellow-400 ${
              isCommented ? "text-yellow-400" : ""
            }`}
          />
        </div>
        {isLiked && (
          <div className="text-white absolute top-0 right-0 mt-2 mr-8">
            <p className="border-b border-green-400 ">This one is Liked!</p>
          </div>
        )}
        {isCommented && (
          <div className="text-white absolute top-0 right-0 mt-8 mr-8 ">
            <p className="border-b border-yellow-400">This one is Commented!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
