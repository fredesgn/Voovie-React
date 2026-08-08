import VoovieCard from "../components/VoovieCard";
import emptyBookmark from "../assets/empty-bookmark.svg";
import "../css/Bookmark.css";

function Bookmark({ bookmarks, toggleBookmark }) {
  return (
    <div className="bookmark">
      {bookmarks.length === 0 ? (
        <div className="bookmark-empty">
          <img
            src={emptyBookmark}
            alt="No bookmarked movies"
            className="bookmark-illustration"
          />

          <h2>No Bookmarks Yet</h2>

          <p>Start adding movies to your bookmarks and they will appear here.</p>
        </div>
      ) : (
        <>
          <h2>My Bookmarks</h2>

          <div className="voovies-grid">
            {bookmarks.map((movie) => (
              <VoovieCard
                key={movie.id}
                movie={movie}
                bookmarked={true}
                onBookmark={() => toggleBookmark(movie)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Bookmark;
