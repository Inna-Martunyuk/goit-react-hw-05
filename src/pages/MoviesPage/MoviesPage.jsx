import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovies } from "../../api";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm"; 
import css from "./MoviesPage.module.css"

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? ""; 
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!query) return; 

    async function getMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovies(query);
        setMovies(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, [query]); 

  const handleSubmit = (value) => {
    setSearchParams({ query: value }); 
  };

  return (
     <div className={css.container}>
      <SearchForm onSubmit={handleSubmit} className={css.searchForm} />
      {isLoading && <b className={css.loading}>Loading movies...</b>}
      {error && (
        <b className={css.error}>
          Whoops, something went wrong, please try reloading this page!
        </b>
      )}
      {movies.length > 0 && <MovieList movies={movies} className={css.movieList} />}
    </div>
  );
}

export default MoviesPage;
