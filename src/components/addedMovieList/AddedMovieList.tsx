import MovieField, { iMovieFieldProps } from '../movieField/MovieField'
import styles from './AddedMovieList.module.css'
interface IMovieListProps {
    movies: iMovieFieldProps[];
}

const AddedMovieList: React.FC<IMovieListProps> = ({movies}) => {
    return(
        <div>
            {
                movies.map(({movieFieldValue, movieFildHandler, id, deleteHanler}) => {
                    return <MovieField id={id} movieFieldValue={movieFieldValue} movieFildHandler={movieFildHandler} deleteHanler={deleteHanler} />
                })
            }
        </div>
    )
}

export default AddedMovieList;