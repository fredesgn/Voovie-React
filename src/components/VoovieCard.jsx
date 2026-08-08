import { FaBookmark, FaRegBookmark, FaStar } from "react-icons/fa";
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
