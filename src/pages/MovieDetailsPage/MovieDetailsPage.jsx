import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchMoviesId } from "../../api";
import { NavLink, Outlet } from "react-router-dom";
import {  Suspense } from "react";
import { ClipLoader } from "react-spinners";
import css from "./MovieDetailsPage.module.css"; 

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLink = useRef(location.state ?? "/movies");

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
    <div className={css.container}>
      <Link to={backLink.current} className={css.backLink}>
        Go back
      </Link>
      {isLoading && <b>Loading movies...</b>}
      {error && (
        <b>Whoops, something went wrong, please try reloading this page!</b>
      )}

      <div className={css.movieDetails}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg"
          }
          width={250}
          alt={movie.title || "poster"}
          className={css.moviePoster}
        />

        <div className={css.movieInfo}>
          <h2 className={css.movieTitle}>
            {`${movie.title || "No title available"} (${
              movie.release_date ? movie.release_date.slice(0, 4) : "Unknown"
            })`}
          </h2>

          <p className={css.userScore}>
            User score: {movie.vote_average * 10}%
          </p>

          <p className={css.overview}>Overview: {movie.overview}</p>
        </div>
      </div>
      <div>
        <h2 className={css.title}>Additional information</h2>
        <nav className={css.navLinks}>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Suspense fallback={<ClipLoader color="#3498db" size={50} />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default MovieDetailsPage;
