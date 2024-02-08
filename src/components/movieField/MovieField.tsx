import styles from './MovieField.module.css'


export interface iMovieFieldProps{
    movieFieldValue: string;
    movieFildHandler: (e: React.ChangeEvent<HTMLInputElement> )=> void;
    id: string;
    deleteHanler: (id: string) => void;
}

const MovieField: React.FC<iMovieFieldProps> = ({movieFieldValue, movieFildHandler, id, deleteHanler}) => {

   
        return(
            <div>
                    <input type="text" id={id} value={movieFieldValue} onChange={(e) => movieFildHandler(e)}/>
                    <button onClick={() => deleteHanler(id)}><strong>X</strong></button>
            </div>
        )
}
export default MovieField;