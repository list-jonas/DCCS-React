import MovieListItem from "./movie-list-item/MovieListItem";
import "./MovieOverview.styles.css"
import {Movie} from "../../common/models/movie.model";
import {AppViews} from "../../App";
import {useState} from "react";

interface MovieOverviewProps {
    movies: Movie[]
    onFavouriteClick: (id: number) => void
    onWatchedClick: (id: number) => void
    onEditMovie: (movie?: Movie) => void
}

const MovieOverview: React.FC<MovieOverviewProps> = (props) => {
    const { movies, onFavouriteClick, onWatchedClick, onEditMovie } = props

    return (
        <div className="movie-overview-root">
            <div className="movie-overview-button-container">
                <button onClick={() => onEditMovie()}>Add movie</button>
            </div>

            <div className="movie-overview-item-container">
                <div className="movie-overview-header">
                    <div className="movie-overview-header-column" style={{ width: "40px" }} />
                    <div className="movie-overview-header-column" style={{ width: "40px"}} />
                    <div className="movie-overview-header-column"  style={{ width: "400px"}}>
                        Title
                    </div>
                    <div className="movie-overview-header-column"  style={{ width: "70px" }}>
                        Year
                    </div>
                    <div className="movie-overview-header-column" style={{ width: "110px" }}>
                        Watched
                    </div>
                    <div className="movie-overview-header-column" style={{ width: "40px" }} />
                </div>
            </div>

            <div>
                {movies.map((movie, index) => {
                    return (
                        <MovieListItem
                            key={movie.id}
                            orderNr={index + 1}
                            movie={movie}
                            onFavouriteClick={onFavouriteClick}
                            onWatchedClick={onWatchedClick}
                            onEdit={() => onEditMovie(movie)}
                    />)
                })}
            </div>
        </div>
    )
}

export default MovieOverview