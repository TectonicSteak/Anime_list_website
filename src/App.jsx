import {useEffect, useState} from "react";

import './App.css';
import SearchIcon from './search.svg';
import AnimeCard from "./animeCard";

const API_URL = "https://api.jikan.moe/v4";

const App = () =>{
    
    const [animes, setAnimes] =  useState([]);

    const popularAnime = async () =>{
        const response = await fetch(`${API_URL}/top/anime?filter=bypopularity`);
        const data = await response.json();
        
        setAnimes(data.data);
        console.log(animes);
    }
    
    useEffect(() =>{
        popularAnime();
    },[]);

    return(
        <div className="app">
            <h1>Otaku</h1>

            <div className="search">
                <input
                    placeholder="Search for Animes"
                    value="Your Name"
                    onChange = {() => {}}
                />
                <img 
                    src={SearchIcon}
                    alt='search'
                    onClick={() => {}}
                />
            </div>
            
            <div className="container">
                <AnimeCard Anime={animes[0]}/>
            </div>
        </div>
    );
}

export default App;