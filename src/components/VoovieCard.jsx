/*import { FaBookmark, FaRegBookmark, FaStar } from "react-icons/fa";
import "../css/VoovieCard.css";

function VoovieCard({ movie, bookmarked, onBookmark }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/no-poster.png"; // fallback for movies without a poster

  return (
    <div className="voovie-card">
      <div className="voovie-poster">
        <img src={imageUrl} alt={movie.title} loading="lazy" />

        <div className="voovie-overlay">
          <button
            className="bookmark-btn"
            onClick={onBookmark}
            aria-label={bookmarked ? "Remove bookmark" : "Bookmark movie"}
          >
            {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
          </button>
        </div>
      </div>

      <div className="voovie-info">
        <h3>{movie.title}</h3>

        <div className="movie-meta">
          <span className="rating">
            <FaStar className="star-icon" />
            {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
          </span>

          <span className="release-date">{movie.release_date || "TBA"}</span>
        </div>

        <p className="movie-description">
          {movie.overview
            ? movie.overview.length > 120
              ? `${movie.overview.substring(0, 120)}...`
              : movie.overview
            : "No description available."}
        </p>
      </div>
    </div>
  );
}

export default VoovieCard;
*/

import { useState, useEffect } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { getMovieDetails } from "../network/api";
import "../css/VoovieCard.css";

function VoovieCard({ movie, bookmarked, onBookmark }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    async function fetchDetails() {
      try {
        const data = await getMovieDetails(movie.id);
        if (!isCancelled) setDetails(data);
      } catch (err) {
        // Card still renders fine with just the base movie data if this fails
        console.error(`Couldn't load details for movie ${movie.id}:`, err);
      }
    }

    fetchDetails();

    return () => {
      isCancelled = true;
    };
  }, [movie.id]);

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/no-poster.png";

  const year = movie.release_date ? movie.release_date.slice(0, 4) : "TBA";

  const director = details?.credits?.crew?.find(
    (person) => person.job === "Director"
  )?.name;

  const producers = details?.credits?.crew
    ?.filter((person) => person.job === "Producer")
    .slice(0, 2)
    .map((person) => person.name)
    .join("   ");

  const starring = details?.credits?.cast
    ?.slice(0, 3)
    .map((person) => person.name)
    .join("   ");

  return (
    <div className="voovie-card">
      <div className="voovie-poster">
        <img src={imageUrl} alt={movie.title} loading="lazy" />

        <button
          className="bookmark-btn"
          onClick={onBookmark}
          aria-label={bookmarked ? "Remove bookmark" : "Bookmark movie"}
        >
          {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>

      <div className="voovie-info">
        <h3 className="voovie-title">
          {movie.title} <span className="voovie-year">{year}</span>
        </h3>

        <div className="voovie-detail-row">
          <span className="detail-label">running time</span>
          <span className="detail-value">
            {details?.runtime ? `${details.runtime} MINUTES` : "—"}
          </span>
        </div>

        <div className="voovie-detail-row">
          <span className="detail-label">directed by</span>
          <span className="detail-value">{director || "—"}</span>
        </div>

        <div className="voovie-detail-row">
          <span className="detail-label">produced by</span>
          <span className="detail-value">{producers || "—"}</span>
        </div>

        <div className="voovie-detail-row starring-row">
          <span className="detail-label">starring</span>
          <span className="detail-value">{starring || "—"}</span>
        </div>
      </div>
    </div>
  );
}

export default VoovieCard;
