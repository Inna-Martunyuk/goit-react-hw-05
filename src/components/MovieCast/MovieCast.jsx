import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../api";
import css from "./MovieCast.module.css"

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        setIsLoading(true);
        setError(false);
        const castData = await fetchMovieCast(movieId);
        setCast(castData);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getCast();
  }, [movieId]);

 return (
   <div className={css.movieCastContainer}>
     {isLoading && <b className={css.loading}>Loading cast...</b>}
     {error && (
       <b className={css.errorMessage}>
         Whoops, something went wrong, please try reloading this page!
       </b>
     )}

     {cast.length > 0 ? (
       <ul className={css.castList}>
         {cast.map((actor) => (
           <li key={actor.id} className={css.castItem}>
             <img
               src={
                 actor.profile_path
                   ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                   : "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg"
               }
               width={250}
               alt={actor.name || "poster"}
             />
             <p className={css.actorName}>
               {actor?.name || "No Name Available"}
             </p>
             <p className={css.actorCharacter}>
               Character: {actor?.character || "Unknown"}
             </p>
           </li>
         ))}
       </ul>
     ) : (
       <p className={css.noCast}>No cast information available.</p>
     )}
   </div>
 );

}

export default MovieCast;
