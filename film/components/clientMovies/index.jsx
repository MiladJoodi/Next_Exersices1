"use client"
import { useState, useEffect } from "react"
import axios from 'axios'

const MoviesFromClient = ()=>{

    useEffect(()=>{
        axios.get("")
    }, [])

    return(
        <div>
            MoviesFromClient
        </div>
    )
}
export default MoviesFromClient