const artist = {
    name: "Red Hot Chilli Peppers",
    genre: "Funk Rock",
    description: "Formed in Los Angeles in 1983, the Red Hot Chili Peppers became pioneers of funk rock by blending hard-hitting punk rhythms with infectious funk grooves. Known for their high-energy performances and the iconic slap bass of Flea, they evolved into one of the most successful alternative rock bands in history."
}

const albums = [{
    name: "Blood Sugar Sex Magik", 
    release_date: "1991-09-24", 
    cover_art_url: "https://images.squarespace-cdn.com/content/v1/56858337cbced60d3b293aef/1625051122017-6206SE07NDEDLE6NZ8CL/Albumism_RedHotChiliPeppers_BloodSugarSexMagik_MainImage_16x9.jpg?format=1000w",
    image_size: 120
}, {
    name: "Californication",
    release_date: "1999-06-08",
    cover_art_url: "https://cdn.shoplightspeed.com/shops/613549/files/4665352/800x1024x2/lp-red-hot-chili-peppers-californication-2lp.jpg",
    image_size: 120
}, {
    name: "By the Way", 
    release_date: "2002-07-09", 
    cover_art_url: "https://dn710103.ca.archive.org/0/items/mbid-7bf61d18-8c80-3402-b0f6-dc1ecc4506eb/mbid-7bf61d18-8c80-3402-b0f6-dc1ecc4506eb-4739709885_thumb250.jpg",
    image_size: 120
}]

import { useState } from "react";

export default function App() {
    return (
        <div>
            <h1>My Music App</h1>
            <Artist />
            <h1>Albums</h1>
            <Albums />
        </div> 
    );
}

function Artist() {
    return(
        <div>
            <h2>{artist.name}</h2>
            <h2>{artist.genre}</h2>
            <p>{artist.description}</p>
        </div>
    )
}

function Albums () {
    const listAlbums = albums.map(album => 
        <ul key={album.name}>
            <li>{album.name}</li>
            <li>{album.release_date}</li>
            <li><img style={{width: album.image_size, height: album.image_size}}src={album.cover_art_url}></img></li>
            <LikeButton />
        </ul>
    )
    return(
        <div>{listAlbums}</div>
    )
}

function LikeButton () {
    const [liked, setLiked] = useState(false)
    const toggleLike = () => {
        setLiked(!liked)
    }
    return (
        <button onClick={toggleLike}>
            {liked ? '❤️ Liked' : '♡ Like'}
        </button>
    )
}