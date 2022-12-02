import React, { Fragment } from "react";
import Banner from "../Banner";
import MovieList from "../MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <section className="movie-layouts page-container mb-10">
        <h2 className="capitalize mb-5 text-2xl text-white font-semibold">
          Now Playing
        </h2>
        <MovieList category="now_playing"></MovieList>
      </section>
      <section className="movie-layouts page-container mb-10">
        <h2 className="capitalize mb-5 text-2xl text-white font-semibold">
          Top rated
        </h2>
        <MovieList category="top_rated"></MovieList>
      </section>
      <section className="movie-layouts page-container mb-10">
        <h2 className="capitalize mb-5 text-2xl text-white font-semibold">
          Popular
        </h2>
        <MovieList category="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
