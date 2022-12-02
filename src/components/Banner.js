import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../config";
const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=a62c386893743ed30c91c0306c224075&language=en-US&page=1`,
    fetcher
  );

  const movies = data?.results || [];
  return (
    <section className="banner h-[400px] page-container rounded-md mb-10 overflow-hidden select-none">
      <Swiper grabCursor={"true"} slidesPerView="auto">
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
const BannerItem = ({ item }) => {
  const { title, vote_average, poster_path, release_date } = item;
  return (
    <div className="relative h-full">
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-md"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="w-full h-full rounded-md object-cover"
      />
      <div className="content absolute bottom-10 left-5 text-white">
        <h1 className="font-bold text-6xl mb-5">{title}</h1>
        <div className="tag flex gap-x-3 items-center mb-5">
          <span className="px-6 py-2 border border-white rounded-md">
            Action
          </span>
          <span className="px-6 py-2 border border-white rounded-md">
            Action
          </span>
          <span className="px-6 py-2 border border-white rounded-md">
            Action
          </span>
        </div>
        <button className="px-10 py-3 bg-primary text-white rounded-md">
          Watch
        </button>
      </div>
    </div>
  );
};

export default Banner;
