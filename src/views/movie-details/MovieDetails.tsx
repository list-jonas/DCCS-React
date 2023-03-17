import { useState } from "react";
import { Genre } from "../../common/models/genre.model";
import {Movie} from "../../common/models/movie.model";
import "./MovieDetails.styles.css"

interface IMovieDetailsProps {
    movie : Movie | undefined;
    handleSave(movie : Movie) : void,
    handleGoBack() : void,
    genres : Genre[],
}

const MovieDetails: React.FC<IMovieDetailsProps> = ({ movie, handleSave, handleGoBack, genres }) => {

    const initialMovie : Movie = {
        title : "",
        description : "",
        imageUrl : "",
        isFavorite : false,
        isWatched : false,
        year: 1999
    };

    const [formState, setFormState] = useState<Movie>(movie ?? initialMovie);

    const handleTitleChange = (newValue : string) => {
        setFormState({
            ...formState,
            title : newValue
        });
    }

    const handleYearChange = (newValue : number) => {
        setFormState({
            ...formState,
            year : newValue
        })
    }

    const handleDescChange = (newValue : string) => {
        setFormState({
            ...formState,
            description : newValue
        });
    }

    const handleImageUrlChange = (newValue : string) => {
        setFormState({
            ...formState,
            imageUrl : newValue
        });
    }

    const handleGenreSelect = (id : number) => {
        setFormState({
            ...formState,
            genre : genres.find(e => e.id === id)
        });
    }

    return (
      <div className={"movie-details-root"}>
          <div className="movie-details-header">
              <span>{"Add movie"}</span>
          </div>

          <div className="movie-details-content">
              <div className="movie-details-img-container">
                  <img src={
                      formState.imageUrl
                  } alt="None"/>
              </div>
              <div className="movie-details-form-container">
                  <div className="movie-details-from-field">
                      <label>Title</label>
                      <input
                        type="text"
                        maxLength={50}
                        value={formState.title}
                        onChange={e => {handleTitleChange(e.target.value)}}
                      />
                  </div>
                  <div className="movie-details-from-field">
                      <label>Genre</label>
                      <select value={formState.genre?.id} onChange={e => handleGenreSelect(Number(e.target.value))}>
                          {genres.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
                      </select>
                  </div>
                  <div className="movie-details-from-field">
                      <label>Year</label>
                      <input
                        type="number"
                        min={1900}
                        max={2023}
                        value={formState.year}
                        onChange={e => {handleYearChange(e.target.valueAsNumber)}}
                      />
                  </div>
                  <div className="movie-details-from-field">
                      <label>Description</label>
                      <input
                        type="text"
                        maxLength={200}
                        value={formState.description}
                        onChange={e => {handleDescChange(e.target.value)}}
                      />
                  </div>
                  <div className="movie-details-from-field">
                      <label>Image url</label>
                      <input
                        type="text"
                        value={formState.imageUrl}
                        onChange={e => {handleImageUrlChange(e.target.value)}}
                      />
                  </div>
              </div>
          </div>

          <div className="movie-details-button-container">
              <button className="movie-details-cancel-button" onClick={() => handleGoBack()}>Cancel</button>
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