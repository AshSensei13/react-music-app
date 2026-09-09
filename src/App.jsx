import Nav from './Nav'
import {Artist, Albums, Home, ShowLyrics } from "./Components"
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { ArtistProvider } from './contexts/artist';
import { AlbumProvider } from './contexts/albums';

export default function App() {

    return (
        <ArtistProvider>
            <AlbumProvider>
                <div className="App">
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/artist" element={<Artist />} />
                        <Route path='/albums'>
                            <Route index element={<Albums />} />
                            <Route path=':featured_song' element={<ShowLyrics />} />
                        </Route>
                    </Routes>
                </div> 
            </AlbumProvider>
        </ArtistProvider>
    );
}

