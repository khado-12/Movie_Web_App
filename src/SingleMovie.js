import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import './singlemovie.css';

const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);

  const { isLoading, movie, isError } = useFetch(`&i=${id}`);

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title"><b>{movie.Title}</b></p>
          <p className=""></p>
          <p className="card-text">Rlease: {movie.Released}</p>
          <p className="card-text">Genre: {movie.Genre}</p>
          <p className="card-text">Rating: {movie.imdbRating} / 10</p>
          <p className="card-text">Country: {movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
