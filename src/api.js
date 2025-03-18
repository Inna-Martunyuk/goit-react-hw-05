import axios from "axios";

export const fetchMovies = async () => {
  const resp = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day",
    {
      params: {
        language: "en-US",
      },
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzhjZTk4YTE5MmU1MGViMzEyZTg4N2RiMjNkM2ViYSIsIm5iZiI6MTc0MjMwNzU1Ny4wMTcsInN1YiI6IjY3ZDk4MGU1MzU3MmFmNWJjYzA4OTZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m6zWJQ4WseEjN9bpeYPPzF1IFUyaclVrwEF5-IPWECY",
      },
    }
  );

  return resp.data;
};
