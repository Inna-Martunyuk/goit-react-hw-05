import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage"
import MoviesPage from "./pages/MoviesPage/MoviesPage"
// import MovieDetailsPage from "./pages/MovieDetailsPage"
// import MovieCast from "./components/MovieCast"
// import MovieReviews from "./components/MovieReviews"
// import NotFoundPage from "./pages/NotFoundPage"


function App() {
  

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="NotFoundPage" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
}

export default App
