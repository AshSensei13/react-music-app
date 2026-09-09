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

import React, { useState, useContext, createContext } from "react";

const AlbumContext = createContext();

export const AlbumProvider = ({ children }) => {
    const [album, setAlbum] = useState(albums);

    return (
        <AlbumContext.Provider value={{ album, setAlbum }}>
            {children}
        </AlbumContext.Provider>
    );
};

export const useAlbum = () => useContext(AlbumContext);