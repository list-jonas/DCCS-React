import "./MovieListItem.styles.css"
import {BookmarkAdded, BookmarkBorder, Delete, Star, StarOutline} from "@mui/icons-material";
import {Movie} from "../../../common/models/movie.model";


interface MovieListItemProps {
    orderNr: number
    movie: Movie
    onFavouriteClick: (id: number) => void
    onWatchedClick: (id: number) => void
    onEdit: () => void
}

const MovieListItem: React.FC<MovieListItemProps> = (props) => {
    const { movie, orderNr, onFavouriteClick, onWatchedClick, onEdit} = props

    return (
        <div className="movie-list-item" onClick={onEdit}>
            <div className="movie-list-item-column" style={{ width: "40px" }}>
                <span className="movie-list-item-icon" onClick={(e) => {
                    e.stopPropagation()
                    movie.id && onFavouriteClick(movie.id)
                }}>
                    {movie.isFavorite ? <Star /> : <StarOutline />}
                </span>
            </div>
            <div className="movie-list-item-column" style={{ width: "40px"}}>
                <img className="movie-list-item-img" src={movie.imageUrl} alt={"pic"} />
            </div>
            <div className="movie-list-item-column"  style={{ width: "400px" }}>
                <span>{`${orderNr}. ${movie.title}`}</span>
            </div>
            <div className="movie-list-item-column"  style={{ width: "70px" }}>
                <span>{movie.year}</span>
            </div>
            <div className="movie-list-item-column" style={{ width: "110px" }}>
                <span className="movie-list-item-icon" onClick={(e) => {
                    e.stopPropagation()
                    movie.id && onWatchedClick(movie.id)
                }}>
                    {movie.isWatched ? <BookmarkAdded /> : <BookmarkBorder />}
                </span>
            </div>
            <div className="movie-list-item-column" style={{ width: "40px" }}>
                <span className="movie-list-item-icon-delete" onClick={e => {}}>
                    <Delete />
                </span>
            </div>
        </div>
    )
}

export default MovieListItem