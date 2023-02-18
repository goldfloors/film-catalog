import React from "react";

function Shows() {
    return(
        <div>
 <div className="shows">
            <img src={imageBase + movie.poster_path} className="poster"></img>
            <div className="show-titles">
                <div className="box">
                    <h4 className="title">{movie.title}</h4>
                    <p className="rating">{movie.vote_average}</p>
                    </div> 
                    <div className="overview">
                        <h1>{movie.overview}</h1>

                    </div>

            </div>
        </div>
        </div>
    )
}

export default Shows;