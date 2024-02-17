"use client"
import { useState, useEffect } from 'react'
import axios from 'axios';

const AllMidBanners = ()=>{
    const [banners, setbanners] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    useEffect(()=>{
        axios.get(`http://localhost:27017/api/middle-banners?pn=${pageNumber}`)
        .then(data=> setbanners(data))
        .catch(e=>console.log(e))
    },[])
    return(
        <div>
            AllMidBanners
        </div>
    );
}

export default AllMidBanners;
