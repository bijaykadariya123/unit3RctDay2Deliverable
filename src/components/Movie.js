
function Movie(props){
    return(
        
        <div className="subContainer">            
                <img src={props.movie.image} alt ="img"/>
                <h2>{props.movie.name}</h2>
                <p>Rating: {props.movie.rating}</p>
                <p>Year: {props.movie.year}</p>
        </div>
    )
}

export default Movie;