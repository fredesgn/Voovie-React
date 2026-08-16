import { useState, useEffect } from "react";
import VoovieCard from "../components/VoovieCard";
import { getPopularMovies, searchMovies } from "../network/api";
import "../css/Home.css";

function Home({ bookmarks, toggleBookmark }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [voovies, setVoovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      setError(null);
      try {
        const results = await getPopularMovies();
        setVoovies(results);
      } catch (err) {
        console.error(err);
        setError("Couldn't load movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const results = await searchMovies(searchQuery);
      setVoovies(results);
    } catch (err) {
      console.error(err);
      setError("Search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="voovie">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading && <p className="status-message">Loading movies...</p>}
      {error && <p className="status-message error">{error}</p>}

      {!loading && !error && (
        <div className="voovies-grid">
          {voovies.map((movie) => (
            <VoovieCard
              key={movie.id}
              movie={movie}
              bookmarked={bookmarks.some((item) => item.id === movie.id)}
              onBookmark={() => toggleBookmark(movie)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home