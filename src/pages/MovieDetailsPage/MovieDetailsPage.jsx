import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesId } from "../../api";
import { NavLink, Outlet } from "react-router-dom";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMoviesId(movieId);
        setMovie(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
  return null; 
}
 

  return (
    <div>
      {isLoading && <b>Loading movies...</b>}
      {error && (
        <b>Whoops, something went wrong, please try reloading this page!</b>
      )}

      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>Release date: {movie.release_date || "Unknown"}</p>
      <p>Overview: {movie.overview}</p>

      <nav>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
