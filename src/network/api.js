const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch popular movies: ${response.status}`);
  }

  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error(`Failed to search movies: ${response.status}`);
  }

  const data = await response.json();
  return data.results;
};

// Runtime, director, producers, and cast aren't in the popular/search
// results — they live on the single-movie endpoint. append_to_response
// pulls credits in the same request instead of a second round trip.
export const getMovieDetails = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch movie details: ${response.status}`);
  }

  return response.json();
};
