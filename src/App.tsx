import AppHeader from "./common/components/app-header/AppHeader";
import "./App.css"
import React, {useState} from "react";
import {Movie} from "./common/models/movie.model";
import {genresMockData, moviesMockData} from "./common/mock-data";
import MovieOverview from "./views/movie-overview/MovieOverview";
import MovieDetails from "./views/movie-details/MovieDetails";

export enum AppViews {
  MovieOverview = 1,
  MovieDetails
}

function App() {
    const [movies, setMovies] = useState<Movie[]>(moviesMockData)
    const [selectedView, setSelectedView] = useState<AppViews>(AppViews.MovieOverview)
    const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>()

    const handleFavouriteClick = (id: number) => {
        const updated = movies.map(movie => {
            if (movie.id === id) {
                return {
                    ...movie,
                    isFavorite: !movie.isFavorite
                }
            }
            return movie
        })
        setMovies(updated)
    }

    const handleWatchedClick = (id: number) => {
        const updated = movies.map(movie => {
            if (movie.id === id) {
                return {
                    ...movie,
                    isWatched: !movie.isWatched
                }
            }
            return movie
        })
        setMovies(updated)
    }

    const handleMovieEdit = (movie?: Movie) => {
        setSelectedMovie(movie)
        setSelectedView(AppViews.MovieDetails)
    }

    const handleMovieSave = (movie: Movie) => {
        if (!movie.id) {
            movie.id = Math.max(...movies.map(m => m.id!)) + 1
            setMovies([...movies, movie])
            setSelectedView(AppViews.MovieOverview)
            return
        }
        const updated = movies.map(m => {
            if (m.id === movie.id) {
                return movie
            }
            return m
        })
        setMovies(updated)
        setSelectedView(AppViews.MovieOverview)
    }

    const handleMovieCancel = () => {
        setSelectedView(AppViews.MovieOverview)
        setSelectedMovie(undefined)
    }

    const renderSelectedView = () => {
        if (selectedView === AppViews.MovieOverview) {
            return <MovieOverview
                movies={movies}
                onFavouriteClick={handleFavouriteClick}
                onWatchedClick={handleWatchedClick}
                onEditMovie={handleMovieEdit} />
        } else if (selectedView === AppViews.MovieDetails) {
            return (
                <MovieDetails
                    movie={selectedMovie}
                    handleSave={handleMovieSave}
                    genres={genresMockData}
                    handleGoBack={handleMovieCancel}
                />
            )
        }
        return <div>Unknown view</div>
    }

  return (
    <div className="app">
      <AppHeader />
      <div className="app-content">
          {renderSelectedView()}
      </div>
    </div>
  );
}

export default App;
