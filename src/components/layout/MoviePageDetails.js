import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";

const MoviePageDetails = () => {
  const { movieID } = useParams();
  console.log(movieID);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US`,
    fetcher
  );
  console.log(data);
  return (
    <div className="py-10">
      <div className="w-full h-[500px] p-10">
        <div className="relative h-[500px]">
          <img
            src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="-mt-[250px] w-2/4 rounded-md h-[400px] z-20 relative mx-auto">
            <img
              src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <h1 className="text-center font-bold text-3xl text-white p-10">
            {data?.title}
          </h1>
          <div className="flex justify-center items-center gap-x-5 mb-10">
            {data?.genres.length > 0 &&
              data.genres.map((item, index) => (
                <span
                  key={index}
                  className="px-6 py-4 border border-primary text-primary rounded-sm"
                >
                  {item.name}
                </span>
              ))}
          </div>
          <p className="overview text-center text-white max-w-[800px] mx-auto leading-relaxed">
            {data?.overview}
          </p>
          <MovieCredits></MovieCredits>
        </div>
      </div>
    </div>
  );

  function MovieCredits() {
    const { movieID } = useParams();
    const { data } = useSWR(
      `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${apiKey}&language=en-US`,
      fetcher
    );
    if (!data) return null;
    console.log(data);
    const { cast } = data;
    if (!cast || cast.length <= 0) return null;
    return (
      <>
        <h2 className="text-3xl text-center font-semibold mt-10">Casts</h2>
        <div className="grid grid-cols-4 gap-x-5 mt-10">
          {cast.slice(0, 4).map((item) => (
            <div className="cast-item rounded-md mb-10">
              <img
                src={`https://image.tmdb.org/t/p/original/${item?.profile_path}`}
                alt=""
                className="w-full h-[350px] object-cover rounded-md"
              />
              <h3 className="text-center font-medium text-xl p-5">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default MoviePageDetails;
