import { useEffect, useState } from "react";
import { fetchMovies } from "../../api";
import MovieList from "../../components/MovieList/MovieList";

function HomePage() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
        try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovies();
        setMovies(data); 
      } catch  {
        setError(true);
        } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading && <b>Loading movies...</b>}
      {error && (
        <b>Whoops, something went wrong, please try reloading this page!</b>
          )}
          {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}

export default HomePage;
