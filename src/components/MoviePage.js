import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import MovieCard from "./MovieCard";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=a62c386893743ed30c91c0306c224075&language=en-US&page=1`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
  return (
    <div className="text-white p-10 page-container grid grid-cols-4 gap-x-10 gap-y-10">
      {movies.length > 0 &&
        movies.map((item) => <MovieCard item={item} key={item.id}></MovieCard>)}
    </div>
  );
};

export default MoviePage;
