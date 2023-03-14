import {Movie} from "../../common/models/movie.model";
import "./MovieDetails.styles.css"
import {useState} from "react";
import {Genre} from "../../common/models/genre.model";

interface MovieDetailsProps {
    movie: Movie | undefined
    handleSave: (movie: Movie) => void
    handleCancel: () => void
    genres: Genre[]
}

const initMovie: Movie = {
    title: "",
    description: "",
    imageUrl: "",
    isFavorite: false,
    isWatched: false
}

const MovieDetails: React.FC<MovieDetailsProps> = (props) => {
    const { movie, handleSave, handleCancel, genres } = props
    const [ formState, setFormState ] = useState<Movie>(movie ?? initMovie)

    const handleTitleChange = (title: string) => {
        setFormState({
            ...formState,
            title
        })
    }

    const handleDescriptionChange = (description: string) => {
        setFormState({
            ...formState,
            description
        })
    }

    const handleImageUrlChange = (imageUrl: string) => {
        setFormState({
            ...formState,
            imageUrl
        })
    }

    const handleYearChange = (year: number) => {
        setFormState({
            ...formState,
            year
        })
    }

    return (
        <div className={"movie-details-root"}>
            <div className="movie-details-header">
                <span>{"Add movie"}</span>
            </div>

            <div className="movie-details-content">
                <div className="movie-details-img-container">
                    <img src={formState.imageUrl} alt="None"/>
                </div>
                <div className="movie-details-form-container">
                    <div className="movie-details-from-field">
                        <label>Title</label>
                        <input
                            type="text"
                            maxLength={50}
                            value={formState.title}
                            onChange={e => handleTitleChange(e.target.value)}
                        />
                    </div>
                    <div className="movie-details-from-field">
                        <label>Genre</label>
                        <select>
                            {genres.map(genre => (
                                <option key={genre.id} value={genre.id}>{genre.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="movie-details-from-field">
                        <label>Year</label>
                        <input
                            type="number"
                            min={1900}
                            max={2023}
                            value={formState.year}
                            onChange={e => handleYearChange(parseInt(e.target.value))}
                        />
                    </div>
                    <div className="movie-details-from-field">
                        <label>Description</label>
                        <input
                            type="text"
                            maxLength={200}
                            value={formState.description}
                            onChange={e => handleDescriptionChange(e.target.value)}
                        />
                    </div>
                    <div className="movie-details-from-field">
                        <label>Image url</label>
                        <input
                            type="text"
                            value={formState.imageUrl}
                            onChange={e => handleImageUrlChange(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="movie-details-button-container">
                <button className="movie-details-cancel-button" onClick={() => handleCancel}>Cancel</button>
                <button
                    className="movie-details-save-button"
                    onClick={() => handleSave(formState)}
                    disabled={false}
                >Save
                </button>
            </div>
        </div>
    )
}

export default MovieDetails