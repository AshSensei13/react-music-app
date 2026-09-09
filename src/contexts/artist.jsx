const artists = {
    name: "Red Hot Chili Peppers",
    genre: "Funk Rock",
    description: "Formed in Los Angeles in 1983, the Red Hot Chili Peppers became pioneers of funk rock by blending hard-hitting punk rhythms with infectious funk grooves. Known for their high-energy performances and the iconic slap bass of Flea, they evolved into one of the most successful alternative rock bands in history."
}

import React, { useState, useContext, createContext } from "react";

const ArtistContext = createContext();

export const ArtistProvider = ({ children }) => {
    const [artist, setArtist] = useState(artists);

    return (
        <ArtistContext.Provider value={{ artist, setArtist }}>
            {children}
        </ArtistContext.Provider>
    );
};

export const useArtist = () => useContext(ArtistContext);