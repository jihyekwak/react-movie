import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const [detail, setDetail] = useState([])
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        setDetail(json.data.movie)
        // console.log(json.data)
    }
    useEffect(()=> {
        getMovie();
    }, [])
    return (
        <div>
            <h1>{detail.title}</h1>
            <img src={detail.medium_cover_image} alt={detail.title} />
            <p>{detail.description_intro}</p>
            <span>Genres :</span>
            {detail.hasOwnProperty("genres")? detail.genres.map(g => (
                    <span key={g}> {g} </span>
                )) : null }
            <p>Released Year : {detail.year}</p>
            <p>Rate : {detail.rating}</p>
            <p>Run Time: {detail.runtime}</p>
        </div>
        
    )
}

export default Detail;