import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main"; 
import './components/css/App.css';

const getDataURL= 'http://localhost:4000/api/movies'



function App() {
  const [movieData, setData]=useState([]);
    console.log(movieData)
    

    useEffect(() =>{
        fetch(getDataURL).then(res=>res.json())
        .then(data=>{
            //setData(data.results[0].poster_path);
            setData(data.results)
        })
    },[getDataURL]);
  return (
    <div>
    <Navbar/> 
    <div className="main-movies">
    {movieData.map(movie => {
    return <Main movie={movie}/>})}
     </div>
    
    </div>
  );
}

export default App;


