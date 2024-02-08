"use client"
import { useState, useEffect } from "react"
import axios from 'axios'

const MoviesFromClient = ()=>{

    const [movies, setMovies] = useState([])

    useEffect(()=>{
        axios.get("https://moviesapi.ir/api/v1/movies?page={page}")
        .then(d=> setMovies(d.data.data))
        .catch(e=> console.log(e))
    }, [])


    return(
        <div>
            {movies.map((mov,i)=>(
                <div key={i}>{mov.title}</div>
            ))}
        </div>
    )
}
export default MoviesFromClient