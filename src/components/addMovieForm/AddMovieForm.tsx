import styles from './AddMovieForm.module.css'


interface iAddMovieFormProps{
    inputValue: string;
    inputHandler: (e: React.ChangeEvent<HTMLInputElement> )=> void;
    addMovieSubmit: (e: React.FormEvent<HTMLFormElement>)=> void;
}

const AddMovieForm: React.FC<iAddMovieFormProps> = ({inputValue, inputHandler, addMovieSubmit}) => {

   
        return(
            <div>
                <form onSubmit={(e)=>addMovieSubmit(e)}> 
                    <input type="text" value={inputValue} onChange={(e) => inputHandler(e)}/>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
}
export default AddMovieForm;