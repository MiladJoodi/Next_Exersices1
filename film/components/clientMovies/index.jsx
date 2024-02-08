

const MoviesFromClient = ()=>{

    return(
        <div>
            {movies.map((mov,i)=>(
                <div key={i}>{mov.title}</div>
            ))}
        </div>
    )
}
export default MoviesFromClient