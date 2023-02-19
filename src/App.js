import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import './components/css/App.css';
import Shows from "./components/Shows";

const getDataURL = 'http://localhost:4000/api/movies'
const getShowURL = 'http://localhost:4000/api/shows'



function App() {
  const [generalData, setData] = useState([]);
  const [isShows, setIsShows] = useState(false);

 
  console.log(generalData)


  useEffect(() => {
    fetch(getDataURL).then(res => res.json())
      .then(data => {
        //setData(data.results[0].poster_path);
        setData(data.results)
      })
  }, [getDataURL]);
  return (
    <div>
      <Navbar setData={setData} setIsShows={setIsShows} />
      <div className="main-movies">
        {generalData.map(data => {
         return isShows ? 
         <Shows shows={data}/> 
         : 
         <Main movie={data} />
   
        })}
      </div>

    </div>
  );
}

export default App;


