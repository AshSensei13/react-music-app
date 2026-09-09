const artist = {
    name: "Red Hot Chili Peppers",
    genre: "Funk Rock",
    description: "Formed in Los Angeles in 1983, the Red Hot Chili Peppers became pioneers of funk rock by blending hard-hitting punk rhythms with infectious funk grooves. Known for their high-energy performances and the iconic slap bass of Flea, they evolved into one of the most successful alternative rock bands in history."
}

const albums = [{
    name: "Blood Sugar Sex Magik", 
    release_date: "1991-09-24", 
    cover_art_url: "https://images.squarespace-cdn.com/content/v1/56858337cbced60d3b293aef/1625051122017-6206SE07NDEDLE6NZ8CL/Albumism_RedHotChiliPeppers_BloodSugarSexMagik_MainImage_16x9.jpg?format=1000w",
    image_size: 120,
    featured_song: "Under the Bridge"
}, {
    name: "Californication",
    release_date: "1999-06-08",
    cover_art_url: "https://cdn.shoplightspeed.com/shops/613549/files/4665352/800x1024x2/lp-red-hot-chili-peppers-californication-2lp.jpg",
    image_size: 120,
    featured_song: "Otherside"
}, {
    name: "By the Way", 
    release_date: "2002-07-09", 
    cover_art_url: "https://dn710103.ca.archive.org/0/items/mbid-7bf61d18-8c80-3402-b0f6-dc1ecc4506eb/mbid-7bf61d18-8c80-3402-b0f6-dc1ecc4506eb-4739709885_thumb250.jpg",
    image_size: 120,
    featured_song: "By the Way"
}]

import Nav from './Nav'
import {Artist, Albums, Home, ShowLyrics } from "./Components"
import { Routes, Route } from 'react-router-dom'
import './App.css'

export default function App() {

    return (
        <div className="App">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/artist" element={<Artist artist={artist}/>} />
                <Route path='/albums'>
                    <Route index element={<Albums albums={albums}/>} />
                    <Route path=':featured_song' element={<ShowLyrics artist={artist}/>} />
                </Route>
            </Routes>
        </div> 
    );
}

