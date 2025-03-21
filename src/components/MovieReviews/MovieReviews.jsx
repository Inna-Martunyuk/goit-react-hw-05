import { fetchMovieReviews } from "../../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import css from "./MovieReviews.module.css";

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
        setReviews(dataReviews.results || []); 
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <div className={css.reviewsContainer}>
      {isLoading && <b className={css.loading}>Loading reviews...</b>}
      {error && (
        <b className={css.errorMessage}>
          Whoops, something went wrong, please try reloading this page!
        </b>
      )}
      {reviews.length > 0 ? (
        <ul className={css.reviewList}>
          {reviews.map((review) => (
            <li key={review.id} className={css.reviewItem}>
              <h3 className={css.author}>Author: {review.author}</h3>
              <p className={css.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noReviews}>No reviews available for this movie.</p>
      )}
    </div>
  );
}

export default MovieReviews;
