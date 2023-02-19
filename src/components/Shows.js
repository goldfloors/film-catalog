import React from "react";
import "./css/Shows.css"

function Shows({shows}) {
    const imageBase = 'https://image.tmdb.org/t/p/w500/'
    return(
        <div>
 <div className="shows">
            <img src={imageBase + shows.poster_path} className="poster"></img>
            <div className="shows-details">
                <div className="box">
                    <h4 className="title">{shows.name}</h4>
                    <p className="rating">{shows.vote_average}</p>
                    </div> 
                    <div className="overview">
                        <h1>{shows.overview}</h1>

                    </div>

            </div>
        </div>
        </div>
    )
}

export default Shows;
