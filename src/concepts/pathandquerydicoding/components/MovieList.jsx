import React from "react";
import MovieItem from "./MovieItem";

function MovieList({ movies }) {
  if(!movies.length) {
    return <p>No movie found</p>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default MovieList;

// pada list itu
// 1. Menerima object
// 2. Menguji apakah object ada
// 3. Menggunakan map untuk mencirikan component MovieItem dengan key 
// 4. dan mengirim kan sebuah object yang bernama movie diambil dari arrayOf object milik movies