import {useEffect, useState} from "react";

import './App.css';
import SearchIcon from './search.svg';
import AnimeCard from "./animeCard";

const API_URL = "https://api.jikan.moe/v4";

const Popular = () =>{
    
    const [animes, setAnimes] =  useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const popularAnime = async () =>{
        const response = await fetch(`${API_URL}/top/anime?filter=bypopularity`);
        const data = await response.json();
        
        setAnimes(data.data);
    }

    const searchAnime = async (title) =>{
        const response = await fetch(`${API_URL}/anime?q=${title}`);
        const data = await response.json();
        
        setAnimes(data.data);
    }
    
    console.log(animes);

    useEffect(() =>{
        popularAnime();
    },[]);


    return(
        <div className="app">
            <h1 onClick={popularAnime}>Otaku</h1>

            <div className="search">
                <input
                    placeholder="Search for Animes"
                    value={searchTerm}
                    onChange = {(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt='search'
                    onClick={(e) => {
                        searchAnime(searchTerm)
                        console.log(searchTerm);
                    }}
                />
            </div>
            
            {
                animes?.length > 0
                    ? (
                        <div className="container">
                            {animes.map((anime) => (
                                <a key={anime.mal_id} href="./AnimePage">
                                    <AnimeCard Anime={anime}/>
                                </a>
                            ))};
                        </div>
                    ):(
                        <div className="empty">
                            <h2>No Animes Found</h2>
                        </div>
                    )
            }

            <button className="load-more">Load More</button>

        </div>
    );
}

export default Popular;