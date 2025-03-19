import { fetchMovieReviews } from "../../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MovieReviews() {
     const { movieId } = useParams();
     const [reviews, setReviews] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
      async function getReviews() {
          try {
             setIsLoading(true);
             setError(false);
          const dataReviews = await fetchMovieReviews(movieId);
          setReviews(data);
          } catch {
              setError(true);
          } finally {
              setIsLoading(false);
        }
      }
      getReviews();
    }, [movieId]);

    return (
      <div>
        {isLoading && <b>Loading cast...</b>}
        {error && (
          <b>Whoops, something went wrong, please try reloading this page!</b>
        )}
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available for this movie.</p>
        )}
      </div>
    );
}
export default MovieReviews;