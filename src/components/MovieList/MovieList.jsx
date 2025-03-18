function MovieList  ({ movies }) {
  return (
    <div >
      {movies.map((movie) => (
        <div key={movie.id} >
          <img
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image"}
            alt={movie.title}
            
          />
          <div >
            <h2 >{movie.title}</h2>
            <p >{movie.release_date ? movie.release_date.split("-")[0] : "N/A"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MovieList;
