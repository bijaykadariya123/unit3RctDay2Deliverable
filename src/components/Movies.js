import Movie from "./Movie"

function Movies(props){
    // console.log(props.movies);
    // const moviesJSX=[]

    // for (let movie of props.movies){
    //     moviesJSX.push(<li>{movie.name}</li>)
    //     // moviesJSX.push(<img src={movie.image}/>)
    // }
    return(<div>
            {/* moviesJSX */}
            <h1>Movies</h1>
            <div className="container">
                {props.movies.map((item, index)=>{
                return (
                    <Movie key={item.name} movie={item}/>
                //    <h3  key={item.name}>{item.name}</h3>
                )
                })}
            </div>
    </div>)
}

export default Movies
