import {useEffect, useState} from "react";

import './App.css';
import SearchIcon from './search.svg';
import AnimeCard from "./animeCard";

const API_URL = "https://api.jikan.moe/v4";

const Popular = () =>{
    
    const [animes, setAnimes] =  useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const popularAnime = async () =>{
        const response = await fetch(`${API_URL}/top/anime?filter=bypopularity`);
        const data = await response.json();
        
        setAnimes(data.data);
        console.log(animes);
    }

    const searchAnime = async (title) =>{
        const response = await fetch(`${API_URL}/anime?letter`);
        const data = await response.json();
        
        setAnimes(data.data);
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
                    value={searchTerm}
                    onChange = {(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt='search'
                    onClick={() => {}}
                />
            </div>
            
            {
                animes?.length > 0
                    ? (
                        <div className="container">
                            {animes.map((anime) => (
                                <AnimeCard Anime={anime}/>
                            ))};
                        </div>
                    ):(
                        <div className="empty">
                            <h2>No Animes Found</h2>
                        </div>
                    )
            }
        </div>
    );
}

export default Popular;