import axios from "axios";

const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzhjZTk4YTE5MmU1MGViMzEyZTg4N2RiMjNkM2ViYSIsIm5iZiI6MTc0MjMwNzU1Ny4wMTcsInN1YiI6IjY3ZDk4MGU1MzU3MmFmNWJjYzA4OTZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m6zWJQ4WseEjN9bpeYPPzF1IFUyaclVrwEF5-IPWECY";

const API_URL = "https://api.themoviedb.org/3";

// Для отримання списку трендових фільмів
export const fetchMovies = async () => {
  try {
    const resp = await axios.get(`${API_URL}/trending/movie/day`, {
      params: { language: "en-US" },
      headers: { Authorization: API_TOKEN },
    });
    return resp.data.results; 
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

// Для отримання деталей конкретного фільму
export const fetchMoviesId = async (movieId) => {
  try {
    const resp = await axios.get(`${API_URL}/movie/${movieId}`, {
      params: { language: "en-US" },
      headers: { Authorization: API_TOKEN },
    });
    return resp.data;
  } catch (error) {
    console.error(`Error fetching movie with ID ${movieId}:`, error);
    throw error;
  }
};
// Для отримання акторського складу фільму
export const fetchMovieCast = async (movieId) => {
  try {
    const resp = await axios.get(`${API_URL}/movie/${movieId}/credits`, {
      params: { language: "en-US" },
      headers: { Authorization: API_TOKEN },
    });
    return resp.data.cast; 
  } catch (error) {
    console.error(`Error fetching cast for movie ID ${movieId}:`, error);
    throw error;
  }
};

// Для отримання оглядів фільму
export const fetchMovieReviews = async (movieId) => {
  try {
    const resp = await axios.get(`${API_URL}/movie/${movieId}/reviews`, {
      params: { language: "en-US" },
      headers: { Authorization: API_TOKEN },
    });
    return resp.data.results; 
  } catch (error) {
    console.error(`Error fetching reviews for movie ID ${movieId}:`, error);
    throw error;
  }
};
