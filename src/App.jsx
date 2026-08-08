import { Routes, Route } from "react-router-dom";
import "./css/App.css";

import Home from "./pages/Home";
import Bookmark from "./pages/Bookmark";
import NavBar from "./components/Navbar";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [bookmarks, setBookmarks] = useLocalStorage("bookmarks", []);

  function toggleBookmark(movie) {
    setBookmarks((prevBookmarks) => {
      const exists = prevBookmarks.some((item) => item.id === movie.id);

      if (exists) {
        return prevBookmarks.filter((item) => item.id !== movie.id);
      }

      return [...prevBookmarks, movie];
    });
  }

  return (
    <div className="app">
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<Home bookmarks={bookmarks} toggleBookmark={toggleBookmark} />}
          />

          <Route
            path="/bookmark"
            element={<Bookmark bookmarks={bookmarks} toggleBookmark={toggleBookmark} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
