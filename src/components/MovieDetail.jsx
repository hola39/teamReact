import React from "react";
import Rating from "./Rating";
import "../styles/MovieDetail.css";

const MovieDetail = ({ movie }) => {
  return (
    <div className="movie-detail">
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <Rating movieId={movie.id} />
    </div>
  );
};

export default MovieDetail;
