# Voovie

A movie discovery web app built with React and the TMDB API. Browse popular movies, search for titles, and bookmark your favorites — saved locally so they're there when you come back.

## Features

-  Browse popular movies (via TMDB)
-  Search for movies by title
-  Bookmark/unbookmark movies
-  Bookmarks persist in `localStorage`
-  Responsive layout

## Screenshots

### Home
![Home page](docs/screenshots/home.png)

### Search
![Search results](docs/screenshots/search.png)

### Bookmarks
![Bookmarks page](docs/screenshots/bookmarks.png)

## Tech Stack

- [React 19](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- [TMDB API](https://www.themoviedb.org/documentation/api)

## Getting Started

### Prerequisites

- Node.js (v18+)
- A free [TMDB API key](https://www.themoviedb.org/settings/api)

### Installation

```bash
git clone https://github.com/fredesgn/Voovie-React.git
cd Voovie-React
npm install
```

### Environment variables

Copy the example env file and add your TMDB key:

```bash
cp .env.example .env
```

Then edit `.env`:
### Run locally

```bash
npm run dev
```

Visit `http://localhost:5173`.

### Build for production

```bash
npm run build
```
