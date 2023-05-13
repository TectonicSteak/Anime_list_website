import React from "react";

const AnimeCard = ({Anime}) =>{
    return(
        <div className="anime">
            <div>
                <p>{Anime.title}</p>
            </div>
            <div>
                <img src={Anime.images.jpg.large_image_url} alt={Anime.title}/>
            </div>
            <div>
                <span>{Anime.type}</span>
                <h3>{Anime.title}</h3>
            </div>
        </div>
    )
}

export default AnimeCard;