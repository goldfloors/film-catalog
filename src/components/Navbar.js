import React from "react";
import './css/Navbar.css'


function Navbar() {
    return (
        <div className="Nav-main">
            <nav>
                <ul> 
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">TV Shows</a></li>
                    
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