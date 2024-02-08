import { useId, useState } from 'react';
import AddMovieForm from '../../components/addMovieForm/AddMovieForm';
import AddedMovieList from '../../components/addedMovieList/AddedMovieList';
import styles from './MoviesPage.module.css'
import { iMovieFieldProps } from '../../components/movieField/MovieField';


const MoviesPage:React.FC = () => {

    const [addMovieValue, setAddMovieValue] = useState('');
    const [movies, setMovies] = useState<iMovieFieldProps[]>([]);
    const movieId = useId();
    const inputHandler:React.ChangeEventHandler<HTMLInputElement>  = (e) => {
        setAddMovieValue(e.target.value);
    }
    const movieFildHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { id, value } = e.target;
        setMovies(prevState => {
            return prevState.map(movie => {
                if (movie.id === id) {
                    return { ...movie, movieFieldValue: value };
                } else {
                    return movie;
                }
            });
        })
    }
    const deleteHanler = (id: string) => {
        setMovies(prevState => {
            return prevState.filter(movie => movie.id !== id)
        })
    }
    const addMovieSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        setMovies([...movies, {movieFieldValue: addMovieValue, movieFildHandler: movieFildHandler, id: Date.now()+"", deleteHanler: deleteHanler  }])
        setAddMovieValue('')
    }
    return (
        <div>
            <AddMovieForm inputValue={addMovieValue} inputHandler={inputHandler} addMovieSubmit={addMovieSubmit} />
            <AddedMovieList movies={movies} />
        </div>
    )
}

export default MoviesPage;