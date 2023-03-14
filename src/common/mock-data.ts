import {Movie} from "./models/movie.model";
import {Genre} from "./models/genre.model";

export const moviesMockData: Movie[] = [
    {
        id: 1,
        title: "Avengers: End game",
        description: "",
        genre: { id: 6, name: "Sci-Fi" },
        year: 2019,
        imageUrl: "https://imageio.forbes.com/blogs-images/markhughes/files/2019/04/AVENGERS-ENDGAME-poster-DOLBY-CINEMA.jpg?format=jpg&width=960",
        isFavorite: true,
        isWatched: false
    },
    {
        id: 2,
        title: "Fight club",
        description: "",
        genre: { id: 2, name: "Drama" },
        year: 1999,
        imageUrl: "https://flxt.tmsimg.com/assets/p23069_p_v8_aa.jpg",
        isFavorite: false,
        isWatched: true
    }
]

export const genresMockData: Genre[] = [
    { id: 1, name: "Action" },
    { id: 2, name: "Drama" },
    { id: 3, name: "Thriller" },
    { id: 4, name: "Crime" },
    { id: 5, name: "Comedy" },
    { id: 6, name: "Sci-Fi" },
    { id: 7, name: "Animation" }
]