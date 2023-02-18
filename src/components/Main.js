import React, {useState, useEffect} from "react";
import "./css/Main.css";


function Main({movie}){


    const imageBase = 'https://image.tmdb.org/t/p/w500/'



    
        return  (
            <div className="movie">
            <img src={imageBase + movie.poster_path} className="poster"></img>
            <div className="movie-details">
                <div className="box">
                    <h4 className="title">{movie.title}</h4>
                    <p className="rating">9.7</p>
                    </div> 
                    <div className="overview">
                        <h1>overview</h1>
                        this movie is a great one.

                    </div>

            </div>
        </div>

    )
}

export default Main; 