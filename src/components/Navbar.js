import React from "react";
import './css/Navbar.css'


//movies url
const getDataURL = 'http://localhost:4000/api/movies'

//shows url
const getShowURL = 'http://localhost:4000/api/shows'



  

function Navbar({setIsShows, setData}) {

    const movieClickHandler = () => {
        fetch(getDataURL).then(res => res.json())
          .then(data => {
            //setData(data.results[0].poster_path);
            setData(data.results)
          })
          setIsShows(false)
      }
    
      const showClickHandler = () => {
        fetch(getShowURL).then(res => res.json())
          .then(data => {
            //setData(data.results[0].poster_path);
            setData(data.results)
          })
          setIsShows(true)
      }
    
    return (
        <div className="Nav-main">
            <nav>
                <ul> 
                    <li><a href="#" onClick={() => movieClickHandler()}>Movies</a></li>
                    <li><a href="#" onClick={() => showClickHandler()}>TV Shows</a></li>
                    
                </ul>
                </nav>
                <div className="search-btn">
                    <input type="text" placeholder="Enter Movie Name" className="inputText">
                    </input>
                    <button><i class="fas fa-search"></i></button>
                </div>
        </div>
    )
};

export default Navbar;


