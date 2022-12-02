import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  const { title, vote_average, poster_path, release_date, id } = item;
  return (
    <div className="movie-card p-4 bg-slate-800 rounded-md h-full flex flex-col select-none">
      <div className="rounded-md h-[250px] relative mb-3">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="movie-title text-white mb-3 text-2xl">{title}</h3>
        <div className="movie-info flex items-center justify-between mb-3 text-white opacity-20">
          <span className="movie-year">
            {new Date(release_date).getFullYear()}
          </span>
          <span className="movie-rate">{vote_average}</span>
        </div>
        <button
          onClick={() => navigate(`/movies/${id}`)}
          className="movie-watch p-2 w-full bg-primary text-white text-md rounded-md mt-auto"
        >
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
