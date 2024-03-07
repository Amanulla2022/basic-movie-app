import React from "react";
import moviedata from "./movies.json";
import MovieCard from "./MovieCard";

const Movie = () => {
  return (
    <main className="mt-16 p-8 pb-12 flex flex-col items-center gap-12 bg-black">
      {moviedata.map((movie, index) => {
        return <MovieCard key={index} movie={movie} />;
      })}
    </main>
  );
};

export default Movie;
